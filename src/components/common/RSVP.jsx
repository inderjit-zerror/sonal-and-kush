export default function RSVP() {
  return (
    <div className="min-h-screen flex items-center justify-center COLOR_BG_CREAM px-4">
      <div className="w-full max-w-2xl text-center">
        
        {/* Title */}
        <h1 className="text-5xl Font_Q COLOR_TEXT_RED tracking-wide">
          RSVP
        </h1>
        <p className="Font_YV mt-3.5 font-semibold uppercase tracking-widest COLOR_TEXT_RED ">
          An invitation from our hearts.
        </p>

        {/* Form */}
        <form className="mt-16 space-y-10 text-left">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs Font_YV font-semibold text-[1rem] uppercase tracking-wider COLOR_TEXT_RED mb-2">
              1. Full Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#B97241] focus:outline-none focus:border-black py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs Font_YV font-semibold text-[1rem] uppercase tracking-wider COLOR_TEXT_RED mb-2">
              2. Email Address
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-[#B97241] focus:outline-none focus:border-black py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs Font_YV font-semibold text-[1rem] uppercase tracking-wider COLOR_TEXT_RED mb-2">
              3. Phone Number
            </label>
            <input
              type="tel"
              className="w-full bg-transparent border-b border-[#B97241] focus:outline-none focus:border-black py-2"
            />
          </div>

          {/* Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="bg-[#B97241] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#9e5a2e] cursor-pointer transition"
            >
              Next
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
