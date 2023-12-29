import axios from "axios";
import { useState } from "react"

const UrlShortner = () => {

  const [shortUrl, setShortUrl] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const shortenUrl = (longUrl) => {

    // Call AWS API gateway with the long URL and 
    const api_gateway = 'https://e00m3hs795.execute-api.eu-north-1.amazonaws.com/helloWorld';

    // axios.get(api_gateway)
    //   .then((response) => {
    //     setShortUrl(response.data);
    //     // console.log(response.data);
    //   });

    // on response setShortUrl

    setShortUrl({ message: 'http://www.thisisshort/ajus' });
  }

  // Copy short URL to clipboard
  const copyShortUrl = () => {
    navigator.clipboard.writeText(shortUrl.message);
    setIsCopied(!isCopied);
  }

  return (
    <div className="flex flex-col h-full items-center justify-center gap-10">
      <span className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Link less, Share more</h1>
        <p className="md:text-lg">Your Shortcut to Seamless Connections!</p>
      </span>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-1 w-full">
        <input
          type="text"
          name="url"
          placeholder="Paste / Enter your URL here"
          className="border-2 rounded-lg self-center
        h-16 w-full md:w-[50%] p-5 md:p-8 border-slate-300 outline-none text-lg"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)} />
        <button
          className="self-center bg-slate-800 p-4 md:p-5 rounded-lg text-white font-semibold" onClick={() => shortenUrl(longUrl)}>Shorten</button>
      </div>
      <div className="flex items-center justify-center gap-10 h-10 w-1/2 self-center">
        <a
          href={shortUrl?.message}
          target="_blank"
          rel="noopener noreferrer">{shortUrl?.message}</a>
        {shortUrl && <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios-glyphs/30/000000/copy.png"
          alt="copy"
          className="cursor-pointer object-contain"
          onClick={() => copyShortUrl()} />
        }
      </div>
      <div className="flex items-center justify-center gap-10 h-10 w-1/2 self-center">
        {
          isCopied
          && <div className="flex gap-2 p-2 px-5 bg-green-400 font-semibold rounded-full">
            Copied
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/ok--v1.png" alt="ok--v1"/>
          </div>}
      </div>
    </div>
  )
}

export default UrlShortner