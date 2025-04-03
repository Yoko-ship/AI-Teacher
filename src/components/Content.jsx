import LoadingIndicator from "../UI/LoadingIndicator";
import "../css/UI.css"
import ErrorBlock from "../UI/ErrorBlock";
export function Content(data, isError, isPending, error) {
  let content;
  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (data) {
    const replacedText = data.event.replaceAll("*", "");
    content = <p>{replacedText}</p>;
  }
  if (isError) {
    content = <ErrorBlock title={"Error occured"} message={error.info?.message || "Failed to get data. Please try again"}/>
  }

  return content;
}
