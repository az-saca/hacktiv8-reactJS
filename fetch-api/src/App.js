import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
   axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        'q' : 'election',
        'api-key': ''
      }
   })
   .then((response) => {
      console.log(response.data.response.docs);
      setNews(response.data.response.docs);
    })
  }, []);

  return (
    <div className="container">
      <div className="row">
        {news.map((item) => (
          <div className="col-md-3" key={item._id}>
            <div className="card">
              {item.multimedia && item.multimedia[0] ? (
                <img
                  src={`https://www.nytimes.com/${item.multimedia[0].url}`}
                  className="card-img-top"
                  alt={item.abstract || "News Image"}
                />
              ) : (
                <img
                  src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
                  className="card-img-top"
                  alt="Placeholder"
                />
              )}
              {/* <img
                src={
                  item.multimedia.length > 0
                    ? `https://static01.nyt.com/${item.multimedia[0].url}`
                    : "default-image-url.jpg"
                }
                className="card-img-top"
                alt={item.abstract || "News Image"}
              /> */}
              <div className="card-body">
                <h5 className="card-title">{item.abstract}</h5>
                <p className="card-text">{item.lead_paragraph}</p>
                <a
                  href={item.web_url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
