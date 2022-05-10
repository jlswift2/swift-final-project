import React from 'react'

function Home() {
  return (
    <>
      <header className="bg-header container flex items-center justify-center h-screen mx-auto">
          <div className="font-serif mx-4 p-4 text-center md:p-8">
            <h1 className="text-border text-8xl uppercase font-bold text-black text-border text-outline-black">
              Build Your Own Book
            </h1>
          </div>
        </header>
        <div className="font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
        <p className="mb-6 text-xl md:text-4xl font-bold">Our Service</p>
        <p className="mb-4 text-xl">Build Your Own Book, affectionately known as BYOB, is an app dedicated to the storing and sharing of your favorite recipes.</p>
        <p className="mb-4 text-xl">Be it an old family recipe perfected over generations or a cool recipe you found yesterday, store it with us for safe keeping. </p>
      </div>

      <div className="bg-quote container flex items-center justify-center h-screen mx-auto">
        <blockquote className="bg-gray-800 font-serif mx-4 p-4 text-center text-white md:p-8">
          <p className="font-bold italic text-3xl">
            &ldquo;No more searching for hours for a lost recipe.&rdquo;
          </p>
        </blockquote>
      </div>

      <div className="font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
        <p className="mb-6 text-xl md:text-4xl font-bold">Why BYOB?</p>
        <p className="mb-4 text-xl">If you have ever cooked before, you know the pain of searching high and low for a recipe. Which book was it in? Which site was it?</p>
        <p className="mb-4 text-xl">Never again will you have to ask yourself these questions. Store your recipe with us and get back to cooking. Future you will be thankful.</p>
      </div>

      <div className="bg-footer container flex items-center justify-center h-screen mx-auto">
      </div>

      <div className="font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
        <p className="mb-6 text-xl md:text-4xl font-bold">Make Cooking Social Again</p>
        <p className="mb-4 text-xl">Exhange friend codes with those you love and browse their cooking repertoire. If you like what they are putting down, save it to your book for safe keeping.</p>
        <p className="mb-4 text-xl">Ready to get cooking? Signup for our free service and start enjoying the process again.</p>
        <p className="mb-4 text-xl">Have questions? Email us at admin@byob.com</p>
      </div>
    </>
  )
}

export default Home