import "./App.css";
import Banner from "./Banner";
import MusicIcon from "./MusicIcon";
import OrderSummary from "./OrderSummary";
import PlanCard from "./PlanCard";
import ProceedButton from "./ProceedButton";

function App() {
  return (
    <div>
      <div className="bg-custom  z-10 ">
        <div className="bg-pattern-background h-screen z-20 bg-contain  bg-repeat-x ">
          <div className="container mx-auto   ">
            <div className="grid place-items-center z-30 h-screen">
              <div className=" ">
                <Banner />
                <div className="max-w-md py-30 bg-white rounded-b-2xl z-30 shadow-xl shadow-dropShadowCard drop-shadow-2xl">
                  <div className="flex flex-col gap-6 ">
                    <OrderSummary />

                    <PlanCard
                      amountPaied="$59.99/year"
                      planType="Annual Plan"
                      cardIcon={<MusicIcon />}
                    />
                  <ProceedButton/>
                  <button className="Cancel Order font-RedHat opacity-50 mb-10 hover:text-cancelOrderHover hover:opacity-100 ">Cancel Order</button>
                  </div>
                  
                </div> 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
