import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArogyaRakshak from "../components/subItems/health-plans/ArogyaRakshak";
import CancerCover from "../components/subItems/health-plans/CancerCover";
import ChildMoneyBack from "../components/subItems/child-plans/ChildMoneyBack";
import JeevanTarun from "../components/subItems/child-plans/JeevanTarun";
import SinglePremiumEndownment from "../components/subItems/child-plans/SinglePremiumEndownment";
import JeevanAmar from "../components/subItems/term-plans/JeevanAmar";
import SaralJeevanBima from "../components/subItems/term-plans/SaralJeevanBima";
import BimaBachat from "../components/subItems/single-premium/BimaBachat";
import DhanRekha from "../components/subItems/single-premium/DhanRekha";
import SinglePEndownment from "../components/subItems/single-premium/SinglePEndownment";
import BB from "../components/subItems/money-back/BB";
import BimaShree from "../components/subItems/money-back/BimaShree";
import JeevanShiromani from "../components/subItems/money-back/JeevanShiromani";
import JT from "../components/subItems/money-back/JT";
import NM20 from "../components/subItems/money-back/NM20";
import NM25 from "../components/subItems/money-back/NM25";
import LicNP from "../components/subItems/ulip-plans/LicNP";
import AadhaarShila from "../components/subItems/endownment-plans/AadhaarShila";
import AadhaarStambh from "../components/subItems/endownment-plans/AadhaarStambh";
import BimaJyoti from "../components/subItems/endownment-plans/BimaJyoti";
import JeevanLabh from "../components/subItems/endownment-plans/JeevanLabh";
import JeevanLakshya from "../components/subItems/endownment-plans/JeevanLakshya";
import JeevanAnand from "../components/subItems/endownment-plans/JeevanAnand";
import NewEndownment from "../components/subItems/endownment-plans/NewEndownment";
import SPE from "../components/subItems/endownment-plans/SPE";
import JeevanAkshay from "../components/subItems/pension-plans/JeevanAkshay";
import JeevanShanti from "../components/subItems/pension-plans/JeevanShanti";
import SaralPension from "../components/subItems/pension-plans/SaralPension";
import Home from "../home/Home";
import JeevanAzad from "../components/subItems/endownment-plans/JeevanAzad";
import DhanVriddhi from "../components/subItems/endownment-plans/DhanVriddhi";
import AmritBaal from "../components/subItems/child-plans/AmritBaal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/health-plans/arogya-rakshak",
        element: <ArogyaRakshak />,
      },
      {
        path: "/health-plans/cancer-cover",
        element: <CancerCover />,
      },
      {
        path: "/child-plans/child-money-back",
        element: <ChildMoneyBack />,
      },
      {
        path: "/child-plans/jeevan-tarun",
        element: <JeevanTarun />,
      },
      {
        path: "/child-plans/amrit-baal",
        element: <AmritBaal />,
      },

      {
        path: "/child-plans/single-premium-endownment",
        element: <SinglePremiumEndownment />,
      },
      {
        path: "/term-plans/jeevan-amar",
        element: <JeevanAmar />,
      },
      {
        path: "/term-plans/saral-jeevan-bima",
        element: <SaralJeevanBima />,
      },
      {
        path: "/single-premium/bima-bachat",
        element: <BimaBachat />,
      },
      {
        path: "/single-premium/dhan-rekha",
        element: <DhanRekha />,
      },
      {
        path: "/single-premium/single-premium-endownment",
        element: <SinglePEndownment />,
      },
      {
        path: "/money-back/bima-bachat",
        element: <BB />,
      },
      {
        path: "/money-back/bima-shree",
        element: <BimaShree />,
      },
      {
        path: "/money-back/jeevan-shiromani",
        element: <JeevanShiromani />,
      },
      {
        path: "/money-back/jeevan-tarun",
        element: <JT />,
      },
      {
        path: "/money-back/new-moneyback-20",
        element: <NM20 />,
      },
      {
        path: "/money-back/new-moneyback-25",
        element: <NM25 />,
      },
      {
        path: "/ulip-plans/new-endownment-plus",
        element: <LicNP />,
      },
      {
        path: "/endownment-plans/aadhaar-shila",
        element: <AadhaarShila />,
      },
      {
        path: "/endownment-plans/aadhaar-stambh",
        element: <AadhaarStambh />,
      },
      {
        path: "/endownment-plans/bima-jyoti",
        element: <BimaJyoti />,
      },
      {
        path: "/endownment-plans/jeevan-anand",
        element: <JeevanAnand />,
      },
      {
        path: "/endownment-plans/jeevan-labh",
        element: <JeevanLabh />,
      },
      {
        path: "/endownment-plans/jeevan-lakshya",
        element: <JeevanLakshya />,
      },
      {
        path: "/endownment-plans/jeevan-azad",
        element: <JeevanAzad />,
      },
      {
        path: "/endownment-plans/new-endownment",
        element: <NewEndownment />,
      },
      {
        path: "/endownment-plans/single-premium-endownment",
        element: <SPE />,
      },
      {
        path: "/endownment-plans/dhan-vriddhi",
        element: <DhanVriddhi />,
      },

      {
        path: "/pension-plans/jeevan-akshay",
        element: <JeevanAkshay />,
      },
      {
        path: "/pension-plans/new-jeevan-shanti",
        element: <JeevanShanti />,
      },
      {
        path: "/pension-plans/saral-pension",
        element: <SaralPension />,
      },
    ],
  },
]);
export default router;
