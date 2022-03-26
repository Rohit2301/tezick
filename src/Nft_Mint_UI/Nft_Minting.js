import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { NFTStorage, File } from "nft.storage";
import db from "../fireabse";
import config from "../config/config";
import html2canvas from "html2canvas";
import firebase from "firebase";

const client = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFDQmEwMDVCYTM5YTVhMzEwQzVCNDk5RTQ1NWNGNkY4QzJmMjA0YjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODI2MDEwNTM0MywibmFtZSI6IlRlenRpY2sifQ.7csyuIYzuN22lTH2wWoqT1OYFwxivBsXsNujRFfYy-E",
});

const NftMinting = () => {
  const printRef = React.useRef();
  const { account, web3 } = useMoralis();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const contract = new web3.eth.Contract(nftABI, config.nftContractAddress);
    const data = canvas.toBlob(
      async (blob) => {
        let file = new File([blob], "ChessPosNft.png", { type: "image/png" });
        const metadata = await client.store({
          title: "chessPos position NFT",
          description: description,
          image: file,
          seats: "",
          eventLocation: "",
          amount: "",
          timestamp: "",
          tickets: "",
          ticketSold: "",
        });
        console.log("metadata:", metadata.ipnft);
        try {
          const createCall = contract.methods
            .createToken(metadata.url, chessGame1.fen())
            .send({
              from: account,
            });

          createCall.on("transactionHash", (hash) => {
            console.log(hash);
          });

          createCall.on("receipt", (recipt) => {
            console.log("reciept:", recipt);
            let tokenId = parseInt(recipt.events.Transfer.returnValues.tokenId);
            console.log("tokenId:", tokenId);
            firebase
              .storage()
              .ref(`nfts/${metadata.ipnft}`)
              .put(blob)
              .then((image) => {
                image.ref.getDownloadURL().then((url) => {
                  console.log(url);
                  db.collection("nfts")
                    .doc(metadata.ipnft)
                    .set({
                      tokenId: tokenId,
                      file: url,
                      uri: chessGame1.fen(),
                      metadataUri: metadata.ipnft,
                      title: "chessPos position NFT",
                      description: description,
                      image: file,
                      seats: "",
                      eventLocation: "",
                      amount: "",
                      timestamp: "",
                      tickets: "",
                      ticketSold: "",
                    })
                    .then(() => {
                      alert("Your position's NFT is minted successfully.");
                      navigate("/single-nft", {
                        state: {
                          nft: {
                            tokenId: tokenId,
                            file: url,
                            uri: chessGame1.fen(),
                            metadataUri: metadata.ipnft,
                            amountAtStake: game.amount,
                            createdAt: new Date(),
                            txnHash: recipt.transactionHash,
                            creator: account,
                            owner: account,
                            type: "position",
                          },
                        },
                      });
                    });
                });
              });
          });

          createCall.on("error", (error, recipt) => {
            console.log(error);
            alert(error);
          });
        } catch (error) {
          alert(error.message);
        }
      },
      "image/png",
      1
    );
  };
};

export default NftMinting;
