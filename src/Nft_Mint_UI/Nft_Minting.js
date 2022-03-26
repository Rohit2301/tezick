import React, { useEffect,useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { NFTStorage, File } from "nft.storage";




const client = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFDQmEwMDVCYTM5YTVhMzEwQzVCNDk5RTQ1NWNGNkY4QzJmMjA0YjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODI2MDEwNTM0MywibmFtZSI6IlRlenRpY2sifQ.7csyuIYzuN22lTH2wWoqT1OYFwxivBsXsNujRFfYy-E",
});