import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent.jsx";

function ContentContainer() {

    return (
        <main className="flex flex-col lg:flex-row gap-8 lg:justify-center">
            <LeftContent />
            <RightContent />
        </main>
    );

}
export default ContentContainer;