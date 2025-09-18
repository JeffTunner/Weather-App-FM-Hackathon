import SearchContainer from "./SearchContainer.jsx";
import ContentContainer from "./ContentContainer.jsx";

function MainContent() {
    return (
        <main className="lg:px-28 lg:pb-20 flex flex-col gap-8 lg:gap-12">
            <SearchContainer />
            <ContentContainer />
        </main>
    );
}
export default MainContent;