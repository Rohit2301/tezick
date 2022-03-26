import smartpy as sp
FA2 = sp.io.import_script_from_url("https://smartpy.io/templates/FA2.py")

class ErrorMessages:
    def make(s): 
        """Generates standard error messages prepending contract name (TezTick_)
        Args:
            s: error message string
        Returns:
            standardized error message
        """
        
        return ("TezTick_" + s)
     
    EventNotFound = make("EventNotFound")
    EventSoldOut = make("EventSoldOut")


class TezTick(sp.Contract, ErrorMessages):
    def __init__(self, fa2Address):
        self.init(
            fa2Address = fa2Address,
            noOfEvents = sp.nat(0),
            events=sp.TBigMap(k=sp.TNat, v=sp.TMutez)
            )

    FA2MintParam = sp.TRecord(
        address = sp.TAddress,
        amount = sp.TNat,
        metadata = sp.TMap(sp.TString, sp.TBytes),
        token_id = sp.TNat
    )


    @sp.entry_point
    def createEvent(self, params):
        
        self.data.noOfEvents = self.data.noOfEvents + sp.nat(1)
        self.data.events[self.data.noOfEvents] = sp.record(eventTime = params.eventTime, eventName=params.eventName, eventPlace = params.eventPlace, eventDescription = params.eventDescription, eventTicketPrice = params.eventTicketPrice, noOfTickets = params.noOfTickets, ticketsSold = sp.nat(0), creator = sp.sender)
    

    @sp.entry_point
    def getTicket(self, eventId, uri):
        sp.set_type(uri, sp.TString)
        sp.verify(self.data.events.contains(eventId), ErrorMessages.EventNotFound)
        sp.verify(self.data.events[eventId].ticketsSold < self.data.events[eventId].noOfTickets, ErrorMessages.EventSoldOut)
        sp.verify(self.data.events[eventId].eventTicketPrice == sp.amount, "Send correct Amount")
        mintData = sp.record(
            address = sp.sender,
            amount = sp.nat(1),
            metadata = sp.map({
                "": sp.pack(uri)
            }),
            token_id = eventId,
        )
        contract = sp.contract(
            self.FA2MintParam,
            self.data.fa2Address,
            'mint'
        ).open_some("WRONG_FA2_CONTRACT")
        sp.transfer(mintData, sp.mutez(0), contract)
        self.data.events[eventId].ticketsSold = self.data.events[eventId].ticketsSold+1


if "templates" not in __name__:
    @sp.add_test(name = "teztick")
    def test():
        alice = sp.test_account("Alice")
        bob = sp.test_account("Bob")
        cat = sp.test_account("Cat")
        scenario = sp.test_scenario()
        
        scenario.h1("Creating tezTick")
        scenario += c1
        scenario.h1("Creating nft contract")
        token = FA2.FA2(
            config = FA2.FA2_config(
            non_fungible=True,
            assume_consecutive_token_ids = False
        ),
        admin = alice.address,
        metadata = sp.big_map({
            "": sp.utils.bytes_of_string("tezos-storage:content"),
            "content": sp.utils.bytes_of_string("""{"name": "TezTicks", "description": "Your one way to your Favourite Event"}"""),
        }))
        scenario += token
        c1 = TezTick(fa2Address = token.address)
        scenario.h1("initalizing")