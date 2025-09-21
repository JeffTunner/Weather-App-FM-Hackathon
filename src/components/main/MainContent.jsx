import SearchContainer from "./SearchContainer.jsx";
import ContentContainer from "./ContentContainer.jsx";

function MainContent() {
    return (
        <main className="flex flex-col gap-8 lg:gap-12">
            <SearchContainer />
            <ContentContainer />
        </main>
    );
}
export default MainContent;