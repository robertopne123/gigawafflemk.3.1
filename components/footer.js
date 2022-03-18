import Link from "next/link";

export const FooterLink = (props) => {
  return (
    <Link href={props.link}>
      <a className="">
        <div className="flex flex-row gap-2">
          <p
            className={`font-poppins text-white text-md uppercase hover:text-[${props.colour}]`}
          >
            {props.title}
          </p>
          <div className="flex flex-col justify-center">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] hidden group-hover:flex"
            >
              <path
                d="M0.430991 10.8221L13.431 19.8221C13.581 19.9259 13.7566 19.9866 13.9387 19.9978C14.1208 20.009 14.3025 19.9702 14.4641 19.8855C14.6257 19.8009 14.761 19.6736 14.8555 19.5175C14.95 19.3614 14.9999 19.1825 15 19.0001V1.00005C15.0001 0.817529 14.9503 0.638454 14.8559 0.482234C14.7615 0.326014 14.6261 0.198608 14.4645 0.113824C14.3029 0.0290394 14.1211 -0.00988955 13.9389 0.00125612C13.7567 0.0124018 13.5811 0.0731969 13.431 0.177053L0.430991 9.17705C0.29855 9.26948 0.190388 9.39253 0.115702 9.53573C0.0410156 9.67893 0.00201416 9.83805 0.00201416 9.99955C0.00201416 10.1611 0.0410156 10.3202 0.115702 10.4634C0.190388 10.6066 0.29855 10.7296 0.430991 10.8221V10.8221Z"
                fill="none"
                className={`fill-${props.colour}`}
              />
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
};

export const Footer = () => {
  return (
    <div className="w-full px-4 py-20 bg-black">
      <div className="max-w-[1250px] mx-auto grid md:grid-cols-4 md:gap-0 gap-10 pb-4">
        <div className="flex flex-col">
          <div className="flex flex-row gap-3 md:justify-start justify-center">
            <img src="/logo.svg" className="h-[50px] w-[50px] invert"></img>
            <ul className="c-rainbow relative group w-[150px]">
              <li className="absolute group-hover:animate-rainbow font-parkson text-5xl text-white z-50">
                Gigawaffle
              </li>
              <li className="absolute top-0 group-hover:animate-rainbow group-hover:animation-delay-300 font-parkson text-5xl text-gigapink left-0.5 z-20 hidden group-hover:flex">
                Gigawaffle
              </li>
              <li className="absolute top-0 group-hover:animate-rainbow group-hover:animation-delay-600 font-parkson text-5xl text-gigablue left-1 z-10 hidden group-hover:flex">
                Gigawaffle
              </li>
            </ul>
          </div>
          <p className="mt-5 font-poppins text-gigapink text-lg md:text-left text-center">
            Contact
          </p>
          <Link href="tel: 01772 584880">
            <a className="">
              <div className="flex flex-row group md:justify-start justify-center">
                <p className="font-parkson text-white text-2xl uppercase group-hover:text-gigapink">
                  01772 584880 (Option 2)
                </p>
              </div>
            </a>
          </Link>
          <Link href="mailto: hello@gigawaffle.co.uk">
            <a className="">
              <div className="flex flex-row group md:justify-start justify-center">
                <p className="font-parkson text-white text-2xl uppercase group-hover:text-gigapink">
                  hello@gigawaffle.co.uk
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex flex-col mx-auto w-[30%] md:mr-auto">
          <p className="font-poppins text-gigapink text-lg md:text-left text-center">
            Links
          </p>
          <Link href="/projects">
            <a className="">
              <div className="flex flex-row group md:justify-start justify-center">
                <p className="font-parkson text-white text-2xl uppercase group-hover:text-gigapink">
                  Projects
                </p>
              </div>
            </a>
          </Link>
          <Link href="/services">
            <a className="">
              <div className="flex flex-row group md:justify-start justify-center">
                <p className="font-parkson text-white text-2xl uppercase group-hover:text-gigapink">
                  Services
                </p>
              </div>
            </a>
          </Link>
          <Link href="/ourteam">
            <a className="">
              <div className="flex flex-row group md:justify-start justify-center">
                <p className="font-parkson text-white text-2xl uppercase group-hover:text-gigapink">
                  Our Team
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex flex-col mx-auto w-[30%]">
          <p className="font-poppins text-gigablue text-lg md:text-left text-center">
            Connect
          </p>
          <Link href="https://www.facebook.com/gigawaffleuk">
            <a className="">
              <div className="flex flex-row group md:justify-start justify-center">
                <p className="font-parkson text-white text-2xl uppercase group-hover:text-gigablue">
                  Facebook
                </p>
              </div>
            </a>
          </Link>
          <Link href="https://www.instagram.com/gigawaffleuk">
            <a className="">
              <div className="flex flex-row group md:justify-start justify-center">
                <p className="font-parkson text-white text-2xl uppercase group-hover:text-gigablue">
                  Instagram
                </p>
              </div>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/gigawaffle/">
            <a className="">
              <div className="flex flex-row group md:justify-start justify-center">
                <p className="font-parkson text-white text-2xl uppercase group-hover:text-gigablue">
                  LinkedIn
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex flex-col md:ml-auto mx-auto">
          <p className="font-poppins text-gigapink text-lg md:text-left text-center">
            Our HQ
          </p>
          <p className="font-parkson text-white text-2xl uppercase md:text-left text-center">
            Estate House <br />
            (2nd Floor)
          </p>
          <p className="font-parkson text-white text-2xl uppercase md:text-left text-center">
            Preston
          </p>
          <p className="font-parkson text-white text-2xl uppercase md:text-left text-center">
            PR1 2AB
          </p>
        </div>
      </div>
      <div className="max-w-[1250px] mx-auto flex flex-row gap-2 justify-center mt-4">
        <Link href="https://www.facebook.com/gigawaffleuk">
          <a>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] group"
            >
              <circle
                cx="20"
                cy="20"
                r="19"
                stroke="none"
                className="stroke-gigapink group-hover:stroke-white"
                strokeWidth="2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 20.067C8 26.033 12.333 30.994 18 32V23.333H15V20H18V17.333C18 14.333 19.933 12.667 22.667 12.667C23.533 12.667 24.467 12.8 25.333 12.933V16H23.8C22.333 16 22 16.733 22 17.667V20H25.2L24.667 23.333H22V32C27.667 30.994 32 26.034 32 20.067C32 13.43 26.6 8 20 8C13.4 8 8 13.43 8 20.067Z"
                fill="none"
                className="fill-gigapink group-hover:fill-white"
              />
            </svg>
          </a>
        </Link>
        <Link href="https://www.instagram.com/gigawaffleuk">
          <a>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] group"
            >
              <circle
                cx="20"
                cy="20"
                r="12"
                fill="none"
                className="fill-gigablue group-hover:fill-white"
              />
              <circle
                cx="20"
                cy="20"
                r="19"
                stroke="none"
                className="stroke-gigablue group-hover:stroke-white"
                strokeWidth="2"
              />
              <path
                d="M19.9976 16.9987C18.345 16.9987 16.9964 18.3474 16.9964 20C16.9964 21.6526 18.345 23.0013 19.9976 23.0013C21.6502 23.0013 22.9988 21.6526 22.9988 20C22.9988 18.3474 21.6502 16.9987 19.9976 16.9987ZM28.999 20C28.999 18.7572 29.0103 17.5256 28.9405 16.285C28.8707 14.844 28.5419 13.5652 27.4883 12.5114C26.4323 11.4555 25.1557 11.129 23.7148 11.0592C22.472 10.9894 21.2404 11.0007 19.9998 11.0007C18.757 11.0007 17.5255 10.9894 16.2849 11.0592C14.8439 11.129 13.5651 11.4577 12.5114 12.5114C11.4555 13.5674 11.129 14.844 11.0592 16.285C10.9894 17.5278 11.0007 18.7594 11.0007 20C11.0007 21.2406 10.9894 22.4744 11.0592 23.715C11.129 25.156 11.4577 26.4348 12.5114 27.4886C13.5674 28.5445 14.8439 28.871 16.2849 28.9408C17.5277 29.0106 18.7593 28.9993 19.9998 28.9993C21.2426 28.9993 22.4742 29.0106 23.7148 28.9408C25.1557 28.871 26.4346 28.5423 27.4883 27.4886C28.5442 26.4326 28.8707 25.156 28.9405 23.715C29.0125 22.4744 28.999 21.2428 28.999 20ZM19.9976 24.6179C17.4422 24.6179 15.3798 22.5555 15.3798 20C15.3798 17.4445 17.4422 15.3821 19.9976 15.3821C22.553 15.3821 24.6154 17.4445 24.6154 20C24.6154 22.5555 22.553 24.6179 19.9976 24.6179ZM24.8045 16.2715C24.2078 16.2715 23.726 15.7897 23.726 15.193C23.726 14.5963 24.2078 14.1145 24.8045 14.1145C25.4011 14.1145 25.8829 14.5963 25.8829 15.193C25.8831 15.3347 25.8554 15.475 25.8012 15.6059C25.7471 15.7369 25.6677 15.8558 25.5675 15.956C25.4673 16.0562 25.3483 16.1356 25.2174 16.1897C25.0865 16.2439 24.9462 16.2717 24.8045 16.2715Z"
                fill="black"
              />
            </svg>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/company/gigawaffle/">
          <a>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] group"
            >
              <circle
                cx="20"
                cy="20"
                r="19"
                stroke="none"
                className="stroke-gigapink group-hover:stroke-white"
                strokeWidth="2"
              />
              <path
                d="M20 8C13.3725 8 8 13.3725 8 20C8 26.6275 13.3725 32 20 32C26.6275 32 32 26.6275 32 20C32 13.3725 26.6275 8 20 8ZM17.0625 24.9738H14.6325V17.1537H17.0625V24.9738ZM15.8325 16.1937C15.065 16.1937 14.5688 15.65 14.5688 14.9775C14.5688 14.2912 15.08 13.7638 15.8637 13.7638C16.6475 13.7638 17.1275 14.2912 17.1425 14.9775C17.1425 15.65 16.6475 16.1937 15.8325 16.1937ZM25.9375 24.9738H23.5075V20.64C23.5075 19.6313 23.155 18.9462 22.2763 18.9462C21.605 18.9462 21.2063 19.41 21.03 19.8563C20.965 20.015 20.9488 20.24 20.9488 20.4638V24.9725H18.5175V19.6475C18.5175 18.6713 18.4862 17.855 18.4537 17.1525H20.565L20.6763 18.2388H20.725C21.045 17.7288 21.8288 16.9762 23.14 16.9762C24.7388 16.9762 25.9375 18.0475 25.9375 20.35V24.9738Z"
                fill="none"
                className="fill-gigapink group-hover:fill-white"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
