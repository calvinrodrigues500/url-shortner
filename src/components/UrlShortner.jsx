const UrlShortner = () => {
  return (
    <div className="flex flex-col h-full align-center justify-center gap-10">
      <input
        type="text"
        name="url"
        placeholder="Paste / Enter your URL here"
        className="border-2 rounded-lg self-center
        h-16 w-[50%] p-8"/>
        <button 
        className="self-center">Shorten</button>
    </div>
  )
}

export default UrlShortner