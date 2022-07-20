import logo from "./image/logo.png";
import slide from "./image/slide/airpods_pro_banner.png";
import cardImg from "./image/airpods-max.jpg";
import "./App.css";

const Box = ({ className, children }) => (
  <div className={`box ${className}`}>{children}</div>
);
const Header = ({ children }) => <Box className="header">{children}</Box>;
const NestedContainerHeader = ({ alt = "#", img = logo }) => (
  <div className="logo">
    <img alt={alt} src={img} />
  </div>
);
const TextInnerHeader = ({ title, textButton, href = "#" }) => (
  <>
    <h1 className="slide_title">{title}</h1>
    <a className="slide_button" href={href}>
      {textButton}
    </a>
  </>
);
const NestedContainerHeaderSlide = ({ alt = "#", img = slide }) => (
  <div className="slider">
    <div className="slide">
      <img alt={alt} src={img} className="slide_img" />
      <div className="slide_inner">
        <TextInnerHeader
          title="Airpods Pro"
          textButton="Add to card"
        ></TextInnerHeader>
      </div>
    </div>
  </div>
);

const Search = ({ children }) => <Box className="search">{children}</Box>;
const NestedContainerSearch = ({
  id = "search_input",
  type = "text",
  placeholder = "Enter device name...",
}) => (
  <div className="wreper_input">
    <input
      className="search_input"
      id={id}
      type={type}
      placeholder={placeholder}
    ></input>
  </div>
);
const Content = ({ children }) => (
  <Box className="content" id="content">
    {children}
  </Box>
);
const TextInnerCard = ({
  title,
  textButton,
  cardTrueDescription,
  cardDescription,
  href = "#",
}) => (
  <>
    <div className="card_inner">
      <h2 className="element_titile">{title}</h2>

      <div className="card_true">
        <div className="true"></div>
        <p className="card_description">{cardTrueDescription}</p>
      </div>
      <p className="card_description">{cardDescription}</p>
      <a className="card_button" href={href}>
        {textButton}
      </a>
    </div>
  </>
);
const CardLike = ({
  followDescription,
  aboveFollowDescription,
  ordersDescription,
  aboveOrdersDescription,
}) => (
  <>
    <div className="follow_likes"></div>
    <div className="like_follow">
      <p className="follow_description">{followDescription}</p>
      <p className="follow_description">{aboveFollowDescription}</p>
    </div>
    <div className="like_orders">
      <p className="orders_description">{ordersDescription}</p>
      <p className="follow_description">{aboveOrdersDescription}</p>
    </div>
  </>
);
const NestedContainerContentCard = ({ alt = "#", img = cardImg }) => (
  <div className="content_card">
    <div className="card_body">
      <div className="card_likes"></div>
      <img className="card_img" src={img} alt={alt}></img>
      <TextInnerCard
        title="Airpods Max"
        cardTrueDescription="435 left in stock"
        cardDescription="Price: 999 $"
        textButton="Add to card"
      ></TextInnerCard>
      <div className="card_like">
        <CardLike
          followDescription="77% Positive reviews"
          aboveFollowDescription="Above avarage"
          ordersDescription="2560"
          aboveOrdersDescription="orders"
        ></CardLike>
      </div>
    </div>
  </div>
);
const Main = () => (
  <maim>
    <Content>
      <NestedContainerContentCard></NestedContainerContentCard>
      <NestedContainerContentCard></NestedContainerContentCard>
      <NestedContainerContentCard></NestedContainerContentCard>
      <NestedContainerContentCard></NestedContainerContentCard>
      <NestedContainerContentCard></NestedContainerContentCard>
      <NestedContainerContentCard></NestedContainerContentCard>
    </Content>
  </maim>
);
function App() {
  return (
    <>
      <Header>
        <NestedContainerHeader></NestedContainerHeader>
        <NestedContainerHeaderSlide></NestedContainerHeaderSlide>
      </Header>
      <Search>
        <NestedContainerSearch></NestedContainerSearch>
      </Search>
      <Main></Main>
    </>
  );
}

export default App;
