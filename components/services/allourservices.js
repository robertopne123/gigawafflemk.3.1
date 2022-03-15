export const AllOurServices = () => {
  return (
    <div className="w-full pt-20 bg-gigapink relative">
      <div className="absolute top-0 right-0 h-[30px] w-[120px] flex flex-row -translate-y-[30px]">
        <div className="bg-gigapink h-[30px] w-[30px]"></div>
        <div className="bg-gigablue h-[30px] w-[30px]"></div>
        <div className="bg-white h-[30px] w-[30px]"></div>
        <div className="bg-black h-[30px] w-[30px]"></div>
      </div>
      <div className="max-w-[1250px] mx-auto flex flex-col gap-4 px-4 pb-20">
        <h3 className="text-6xl font-parkson text-white mb-1">
          Web Design & <br />
          Development
        </h3>
        <div className="grid lg3:grid-cols-3 lg2:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 relative">
          <div className="border-2 border-white flex flex-col gap-2 min-h-[550px]">
            <div className="w-full h-[250px] bg-white">
              <img
                src="/services/serviceImages/webdesign.png"
                className="h-full mx-auto py-6"
              ></img>
            </div>
            <div className="p-4">
              <p className="text-4xl font-parkson text-white pb-2">
                Website Design
              </p>
              <p className="font-poppins text-white min-h-[8ch]">
                Make your business look the part with a new website. Our web
                design team love using the latest technologies, following the
                latest web design trends and building websites that are on-brand
                and make people notice! We design with mobile devices in mind
                from the ground up, so we can ensure that your customers have a
                great experience whatever size device their on.
              </p>
            </div>
          </div>
          <div className="border-2 border-white flex flex-col gap-2 min-h-[550px]">
            <div className="w-full h-[250px] bg-white">
              <img
                src="/services/serviceImages/uidesign.png"
                className="h-full mx-auto py-6"
              ></img>
            </div>
            <div className="p-4">
              <p className="text-4xl font-parkson text-white pb-2">UI Design</p>
              <p className="font-poppins text-white">
                The goal of user interface design services is to create
                aesthetically appealing, brand-building digital interfaces that
                attract and keep customers. Whatever your need, our design team
                creates user interfaces that are specifically targeted to your
                target audience, represent customer values, and successfully
                support your company goals.
              </p>
            </div>
          </div>
          <div className="border-2 border-white flex flex-col gap-2 min-h-[550px]">
            <div className="w-full h-[250px] bg-white">
              <img
                src="/services/serviceImages/ecommercedesign.png"
                className="h-full mx-auto py-6"
              ></img>
            </div>
            <div className="p-4">
              <p className="text-4xl font-parkson text-white pb-2">
                E-Commerce Design
              </p>
              <p className="font-poppins text-white">
                Stand out from the crowd with a new e-commerce website that not
                only catches people&apos;s eyes, but makes them return regularly
                through an mobile-first e-commerce setup. We build e-commerce
                sites that go where the customers are, through social media
                shopping services, such as Facebook Marketplace and Instagram
                Shopping.
              </p>
            </div>
          </div>
          <div className="border-2 border-white flex flex-col gap-2 min-h-[550px]">
            <div className="w-full h-[250px] bg-white">
              <img
                src="/services/serviceImages/blogdesign.png"
                className="h-full mx-auto py-6"
              ></img>
            </div>
            <div className="p-4">
              <p className="text-4xl font-parkson text-white pb-2">
                Blog Design
              </p>
              <p className="font-poppins text-white">
                Communicate directly to your target audience with a beautifully
                designed blog, that is easy for you to update and provide value
                to your reader. It allow you to transmit messages that may
                otherwise go unnoticed. Our designers take the effort to produce
                blogs that are interesting to read and deliver a positive user
                experience.
              </p>
            </div>
          </div>
          <div className="border-2 border-white flex flex-col gap-2 min-h-[550px]">
            <div className="w-full h-[250px] bg-white">
              <img
                src="/services/serviceImages/landingdesign.png"
                className="h-full mx-auto py-6"
              ></img>
            </div>
            <div className="p-4">
              <p className="text-4xl font-parkson text-white pb-2">
                Landing Page Design
              </p>
              <p className="font-poppins text-white">
                With a personalised landing page design, you can increase sales,
                improve lead quality, and increase income. Landing pages are
                extremely important in marketing and advertising, so make sure
                you have one that stands out. Our design team will design
                landing pages that are on-brand and capture the attention of
                potential customers.
              </p>
            </div>
          </div>
          <div className="border-2 border-white flex flex-col gap-2 min-h-[550px]">
            <div className="w-full h-[250px] bg-white">
              <img
                src="/services/serviceImages/socialmediashop.png"
                className="h-full mx-auto py-6"
              ></img>
            </div>
            <div className="p-4">
              <p className="text-4xl font-parkson text-white pb-2">
                Social Media Shop
              </p>
              <p className="font-poppins text-white">
                The e-commerce landscape is changing! Social media shopping
                services, such as Facebook Marketing and Instagram shopping are
                becoming increasingly popular. Ensure your e-commerce website
                keeps up with the latest online shopping trends through these
                integrations, allowing you to more efficiently link your
                products to where they can buy them.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-20">
        <div className="max-w-[1250px] mx-auto px-4 pb-20">
          <h3 className="text-6xl font-parkson text-gigapink mb-5">
            visual identity & <br />
            brand design
          </h3>
          <div className="grid lg3:grid-cols-3 lg2:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="border-2 border-gigapink flex flex-col gap-2 min-h-[550px]">
              <div className="w-full h-[250px] bg-white border-b-2 border-gigapink">
                {" "}
                <img
                  src="/services/serviceImages/visualidentity.png"
                  className="h-full mx-auto py-6"
                ></img>
              </div>
              <div className="p-4">
                <p className="text-3xl font-parkson text-gigapink pb-2">
                  Visual Identity Design
                </p>
                <p className="font-poppins text-gigapink">
                  A visual identity is very important to your brand as it can be
                  a way to communicate with your customers who you are and how
                  you represent yourself. These elements include your logo,
                  colour palette, typography, image style, and general look and
                  feel. By having your own unique style, you can excel in
                  formatting your business. Our design team will ensure all
                  aspects are complimentary to each other in creating a
                  well-versed platform for yourself.
                </p>
              </div>
            </div>
            <div className="border-2 border-gigapink flex flex-col gap-2 min-h-[550px]">
              <div className="w-full h-[250px] bg-white border-b-2 border-gigapink">
                <img
                  src="/services/serviceImages/visualrefocus.png"
                  className="h-full mx-auto py-6"
                ></img>
              </div>
              <div className="p-4">
                <p className="text-3xl font-parkson text-gigapink pb-2">
                  Visual Refocus
                </p>
                <p className="font-poppins text-gigapink">
                  Having trouble with your current branding format? We can help
                  to revamp your business and the design and other elements
                  behind what makes your business personalised. We have done
                  this ourselves with the website and social media side,
                  changing our format and implementing a new modernised style.
                  Sometimes a change can prove very successful if your current
                  visual identity isn’t helping you excel in terms of engagement
                </p>
              </div>
            </div>
            <div className="border-2 border-gigapink flex flex-col gap-2 min-h-[550px]">
              <div className="w-full h-[250px] bg-white border-b-2 border-gigapink">
                <img
                  src="/services/serviceImages/logodesign.png"
                  className="h-full mx-auto py-6"
                ></img>
              </div>
              <div className="p-4">
                <p className="text-3xl font-parkson text-gigapink pb-2">
                  Logo Design
                </p>
                <p className="font-poppins text-gigapink">
                  Your logo is important to your business because it
                  communicates ownership, quality, and values. It&apos;s
                  imprinted on your products, your business card, website,
                  social media, and most importantly, in the minds of your
                  clients. It needs to be memorable and simple so that it is
                  easily recognisable. All aspects need to be in proportion and
                  appropriate. Ensure you logo matches all the criteria which is
                  required.
                </p>
              </div>
            </div>
            <div className="border-2 border-gigapink flex flex-col gap-2 min-h-[550px]">
              <div className="w-full h-[250px] bg-white border-b-2 border-gigapink">
                <img
                  src="/services/serviceImages/brand.png"
                  className="h-full mx-auto py-6"
                ></img>
              </div>
              <div className="p-4">
                <p className="text-3xl font-parkson text-gigapink pb-2">
                  Brand Guidelines
                </p>
                <p className="font-poppins text-gigapink">
                  Brand guidelines are clearly defined rules and standards that
                  communicate how your brand should be represented to the world.
                  Brand guidelines help businesses ensure consistency and
                  demonstrate what the company is, what it does, and what it
                  stands for. With our knowledge and understanding of this we
                  can enable your business with appropriate guidelines required.
                </p>
              </div>
            </div>
            <div className="border-2 border-gigapink flex flex-col gap-2 min-h-[550px]">
              <div className="w-full h-[250px] bg-white border-b-2 border-gigapink">
                <img
                  src="/services/serviceImages/stationary.png"
                  className="h-full mx-auto py-6"
                ></img>
              </div>
              <div className="p-4">
                <p className="text-3xl font-parkson text-gigapink pb-2">
                  Stationary Design
                </p>
                <p className="font-poppins text-gigapink">
                  Many businesses use business cards, envelops and letterheads
                  to create a lasting impression on their customers. In
                  stationery design, ensure that you use quality images to make
                  an impact on the targeted customers. Stationery design usually
                  consists of paper, office supplies, letterheads, writing
                  equipment, business cards, cases, and other similar items. The
                  entire goal is to have beautiful branding throughout the
                  company which we can ensure.
                </p>
              </div>
            </div>
            <div className="border-2 border-gigapink flex flex-col gap-2 min-h-[550px]">
              <div className="w-full h-[250px] bg-white border-b-2 border-gigapink">
                <img
                  src="/services/serviceImages/creativedesign.png"
                  className="h-full mx-auto py-6"
                ></img>
              </div>
              <div className="p-4">
                <p className="text-3xl font-parkson text-gigapink pb-2">
                  Creative Design
                </p>
                <p className="font-poppins text-gigapink">
                  Creative design involves using computer-generated imagery and
                  digital animation to visualise a product. It aims to produce
                  unique and memorable designs that stand out so that customers
                  may easily identify a brand or product. Utilising our high
                  processing computers, we are able to fulfil any kind of design
                  you require.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gigablue py-20">
          <div className="flex flex-col max-w-[1250px] mx-auto px-4">
            <h3 className="text-6xl font-parkson text-black mb-5">
              social strategy & <br />
              content design
            </h3>
            <div className="grid lg3:grid-cols-3 lg2:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <div className="border-2 border-black flex flex-col gap-2 min-h-[550px]">
                <div className="w-full h-[250px] bg-white">
                  <img
                    src="/services/serviceImages/socialmgmt.png"
                    className="h-full mx-auto py-6"
                  ></img>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-parkson text-black pb-2">
                    Social Media Management
                  </p>
                  <p className="font-poppins text-black">
                    We can take away the stress of social media and work on
                    engaging social posts that help get your customers
                    interacting and help grow your business, so you can focus on
                    your business. We deal with the content, strategy,
                    enquiries, partnership and more, whilst keeping you in the
                    loop, through regular contact and monthly statistic reports.
                  </p>
                </div>
              </div>
              <div className="border-2 border-black flex flex-col gap-2 min-h-[550px]">
                <div className="w-full h-[250px] bg-white">
                  <img
                    src="/services/serviceImages/contentstrategy.png"
                    className="h-full mx-auto py-6"
                  ></img>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-parkson text-black pb-2">
                    Social Media Content Strategy
                  </p>
                  <p className="font-poppins text-black">
                    Get a bold and powerful edge over your competitors on
                    Facebook, Instagram, YouTube and more with a paid social
                    media content strategy from gigawaffle. Deliver
                    unforgettable, branded content experiences that are
                    specially crafted for your target audience, designed to
                    demolish your targets and help engage your customers, to
                    help your business grow.
                  </p>
                </div>
              </div>
              <div className="border-2 border-black flex flex-col gap-2 min-h-[550px]">
                <div className="w-full h-[250px] bg-white">
                  <img
                    src="/services/serviceImages/emailmarketing.png"
                    className="h-full mx-auto py-6"
                  ></img>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-parkson text-black pb-2">
                    Email Marketing
                  </p>
                  <p className="font-poppins text-black">
                    Promote your business directly to your customers using the
                    power of email. Whether its for one-off promos or whether
                    you want to provide a weekly newsletter, our team can create
                    engaging email content to suit your business and what you
                    have to offer.
                  </p>
                </div>
              </div>
              <div className="border-2 border-black flex flex-col gap-2 min-h-[550px]">
                <div className="w-full h-[250px] bg-white">
                  <img
                    src="/services/serviceImages/advertising.png"
                    className="h-full mx-auto py-6"
                  ></img>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-parkson text-black pb-2">
                    Social Media Advertising
                  </p>
                  <p className="font-poppins text-black">
                    Our experts can plan and create advertisements to showcase
                    your products or services, bring traffic to your website,
                    and/or to promote brand awareness, all with a targetted
                    audience across Facebook, Instagram, Linked-in & tiktok.
                  </p>
                </div>
              </div>
              <div className="border-2 border-black flex flex-col gap-2 min-h-[550px]">
                <div className="w-full h-[250px] bg-white">
                  <img
                    src="/services/serviceImages/contentcreation.png"
                    className="h-full mx-auto py-6"
                  ></img>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-parkson text-black pb-2">
                    Content Creation
                  </p>
                  <p className="font-poppins text-black">
                    We can create engaging video content to promote your
                    products/services ready to put on your website and/or social
                    media&apos;s. Our team can create content which shows off
                    the best bits of your products/services.
                  </p>
                </div>
              </div>
              <div className="border-2 border-black flex flex-col gap-2 min-h-[550px]">
                <div className="w-full h-[250px] bg-white">
                  <img
                    src="/services/serviceImages/seo.png"
                    className="h-full mx-auto py-6"
                  ></img>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-parkson text-black pb-2">
                    Search Engine Optimisation
                  </p>
                  <p className="font-poppins text-black">
                    We take an in-depth look at your website and its content and
                    regularly make SEO tweaks and SEO-focused content to help
                    maximise your websites potential online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-20">
          <div className="flex flex-col max-w-[1250px] mx-auto px-4">
            <div className="flex flex-row gap-4 mb-5">
              <h3 className="text-6xl font-parkson text-gigapink leading-[50px] pb-2">
                podcasts
              </h3>
            </div>
            <div className="grid lg3:grid-cols-3 lg2:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <div className="border-2 border-gigapink relative overflow-clip flex flex-col gap-2 min-h-[550px]">
                <p className="bg-gigablue absolute right-0 top-0 rotate-45 translate-y-3 translate-x-8 text-black font-parkson px-12">
                  new
                </p>
                <div className="w-full h-[250px] bg-white border-b-2 border-gigapink">
                  <img
                    src="/services/serviceImages/podcast.png"
                    className="h-full mx-auto py-6"
                  ></img>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-parkson text-gigapink pb-2">
                    Podcast Recording
                  </p>
                  <p className="font-poppins text-gigapink">
                    Anyone who wants a podcast can book a slot in our studio
                    called The Waffle Corner. We provide great sound proofing
                    and quality microphones for your recording needs. There are
                    a plethora of different podcast necessities including sofas,
                    tripods, a green screen, and a soft box for your lighting.
                    We have an ultimate podcast set up just for our customers.
                    We help brands, influencers and personalities discover the
                    power of podcasting to build audiences.
                  </p>
                </div>
              </div>
              <div className="border-2 border-gigapink relative overflow-clip flex flex-col gap-2 min-h-[550px]">
                <p className="bg-gigablue absolute right-0 top-0 rotate-45 translate-y-3 translate-x-8 text-black font-parkson px-12">
                  new
                </p>
                <div className="w-full h-[250px] bg-white border-b-2 border-gigapink">
                  <img
                    src="/services/serviceImages/production.png"
                    className="h-full mx-auto py-6"
                  ></img>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-parkson text-gigapink pb-2">
                    Podcast Production
                  </p>
                  <p className="font-poppins text-gigapink">
                    Our editors/videographers will ensure stability and
                    structure in your podcasts taking care and precision making
                    sure that your podcast looks the part. They will be precise
                    in where they need to edit out certain parts and add effects
                    and cuts to help keep the flow of your podcast intact. When
                    you utilise, us you will be guaranteed full effort from each
                    of our team to make your podcast as engaging and easy to
                    listen to as possible.
                  </p>
                </div>
              </div>
              <div className="border-2 border-gigapink relative overflow-clip flex flex-col gap-2 min-h-[550px]">
                <p className="bg-gigablue absolute right-0 top-0 rotate-45 translate-y-3 translate-x-8 text-black font-parkson px-12">
                  new
                </p>
                <div className="w-full h-[250px] bg-white border-b-2 border-gigapink">
                  <img
                    src="/services/serviceImages/management.png"
                    className="h-full mx-auto py-6"
                  ></img>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-parkson text-gigapink pb-2">
                    Podcast Management
                  </p>
                  <p className="font-poppins text-gigapink">
                    Managing podcasts couldn’t be more essential when trying to
                    increase listeners. Uploading and controlling them can be
                    made simple with us. We will render and transcript your
                    podcasts as efficiently and effectively as we can so that
                    you don’t have to deal with the time and stress of it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
