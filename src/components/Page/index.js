import About from '../about'
import Portfolio from '../portfolio'
import Contact from '../contact'
import Resume from '../resume'
import PageContent from '../pageContent'

const Page = ({currentPage}) => {
  const renderPage = () => {
    if (currentPage === "About Me") {
      return <About/>
    } else if (currentPage === "Portfolio") {
      return <Portfolio/>
    } else if (currentPage === "Contact") {
      return <Contact/>
    } else if (currentPage === "Resume") {
      return <Resume/>
    };
  }

    return (
      <div>
        <h1>{currentPage.name}</h1>
        <PageContent>{renderPage()}</PageContent>
      </div>
    );
  }
  
  export default Page;
  

