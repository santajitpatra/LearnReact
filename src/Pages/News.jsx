import Search from "../components/Search";
import Stories from "../components/Stories";
import  "../styles/news.css";

const News = () => {
  return (
    <div className="news">
      <Search/>
      <Stories/>
    </div>
  )
}

export default News