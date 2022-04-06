export const Contact = () => {
  return (
    <div className="w-full bg-gigapink py-20 px-4" id="enquire">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-[1250px] mx-auto">
        <div className="flex flex-col gap-4">
          <p className="font-parkson text-white text-5xl">
            GET IN TOUCH WITH US
          </p>
          <p className="font-poppins text-white">
            To map out your path to success, our team will talk about your
            business goals and take a quick look at your digital presence.
            We&apos;ll give you a questionnaire to collect all of the data we
            need to completely comprehend your project or campaign. After that,
            one of our relevant specialists will contact you to go over your
            proposal with you, clarify our reasoning, and forecast your
            company&apos;s growth potential.
          </p>
          <p className="font-parkson text-white text-3xl">
            CONTACT US THROUGH WHATSAPP
          </p>
          <p className="font-poppins text-white text-sm">
            You can now message us through WhatsApp! Get directly in touch with
            the team here at Gigawaffle, where we can provide advice and answer
            any queries or enquiries you send through. <br />
            <br />
            To get in touch with us, please click the WhatsApp icon in the
            bottom right.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <form
            className="flex flex-col gap-4"
            name="enquiryForm"
            method="POST"
            action="/success"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name *"
              className="py-2 px-4 font-parkson text-2xl outline-none"
            ></input>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email *"
              required
              className="py-2 px-4 font-parkson text-2xl outline-none"
            ></input>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone"
              className="py-2 px-4 font-parkson text-2xl outline-none"
            ></input>
            <input
              type="url"
              name="url"
              id="url"
              placeholder="Website"
              className="py-2 px-4 font-parkson text-2xl outline-none"
            ></input>
            <textarea
              name="moreInfo"
              id="moreInfo"
              placeholder="Tell us more about your project..."
              className="py-2 px-4 font-parkson text-2xl outline-none"
            ></textarea>
            <button
              type="submit"
              className="group w-[140px] h-[40px] bg-black hover:bg-transparent hover:border-black border-2 border-black text-white font-poppins font-semibold text-center group-hover:text-black"
            >
              Enquire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
