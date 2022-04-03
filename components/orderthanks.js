import Link from "next/link";

export const OrderThanks = (props) => {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1250px] mx-auto h-[calc(100vh-82px)] grid grid-cols-2 gap-4 justify-center">
        <div className="flex flex-col gap-8 justify-center">
          <h1 className="font-parkson lg2:text-9xl lg3:text-9xl lg:text-9xl sm:text-8xl text-7xl">
            THANK YOU <br />
            FOR YOUR <br />
            PURCHASE
          </h1>

          <div className="flex flex-row gap-4">
            <Link href="/shop">
              <a>
                <div className="group w-[180px] h-[40px] hover:bg-gigapink hover:border-gigapink border-2 border-black flex flex-col justify-center">
                  <p className="font-poppins font-semibold text-center group-hover:text-white">
                    Continue Shopping
                  </p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="group w-[180px] h-[40px] hover:bg-gigapink hover:border-gigapink border-2 border-black flex flex-col justify-center">
                  <p className="font-poppins font-semibold text-center group-hover:text-white">
                    Go Home
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <p className="font-parkson text-2xl">Order No: {props.ordernumber}</p>
          {props.cart.map((item, index) => (
            <div
              className="flex flex-row justify-between bg-black px-3 py-1 border-2 border-white"
              key={index}
            >
              {item.price.length === 2 ? (item.price += ".00") : ""}
              <p className="font-parkson text-xl text-white">
                {item.qty}x <span className="text-2xl">{item.name}</span>
              </p>
              <p className="font-parkson text-2xl text-white">£{item.price}</p>
            </div>
          ))}
          <p className="font-parkson text-2xl">
            Please make payment with the following details:
          </p>
          <p className="font-parkson text-xl">
            Bank Name: Gigawaffle Ltd <br />
            Account Number: 16882978 <br />
            Sort Code: 04-06-05 <br />
            Reference: GWSHOP{props.ordernumber}
          </p>
        </div>
      </div>
    </div>
  );
};
