import React, { PureComponent } from 'react';
import apiGetNewsApiOrg from '../api/apiGetNewsApiOrg';
import MasonryLayout from './MasonryLayout';
import Card from './Card';
import Footer from './Footer';

class AppContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fetchSearch = this.fetchSearch.bind(this);
    this.state = {
      articles: [],
      colNumber: 1,
      keyword: '',
    };
  }

  componentDidMount() {
    this.fetchFrNews();
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const { colNumber } = this.state;
    const col = Math.floor(document.body.clientWidth / 350);
    if (col !== colNumber) {
      this.setState({ colNumber: col > 0 ? col : 1 });
    }
  }

  fetchFrNews = async () => {
    const res = await apiGetNewsApiOrg();
    if (res) {
      this.setState({
        articles: res.data.articles,
      });
      window.scrollTo(0, 0);
    }
  }

  fetchSearch = async (event) => {
    event.preventDefault();
    const { keyword } = this.state;
    const res = await apiGetNewsApiOrg(keyword);
    if (res) {
      this.setState({
        articles: res.data.articles,
      });
      window.scrollTo(0, 0);
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { articles, colNumber, keyword } = this.state;
    return (
      <>
        {/* Navbar */}
        <nav className="fixed-top shadow navbar-light bg-light p-1">
          <div className="d-flex flex-row justify-content-between">
            <a className="navbar-brand m-0" href="./">
              <span className="text-primary h2">Actu</span>
              <span className="text-danger h4">France</span>
            </a>
            <form className="form-inline my-2 ml-auto" onSubmit={this.fetchSearch}>
              <input
                className="form-control form-control-sm m-0 py-2 w-50 ml-auto"
                type="text"
                placeholder="Mot clé"
                name="keyword"
                value={keyword}
                onChange={this.handleChange}
              />
              <button
                style={{ lineHeight: 1 }}
                className="btn btn-primary btn-sm p-0 flex-shrink-0 ml-1"
                type="submit"
              >
                <i className="material-icons align-self-middle">search</i>
              </button>
            </form>
          </div>
        </nav>

        {/* Articles */}
        <div className="container-fluid mt-5 p-1">
          {articles && (
            <MasonryLayout columns={colNumber} gap={10}>
              {articles && articles.length > 0 && articles.map(elm => (
                <Card key={elm.publishedAt} elm={elm} />
              ))}
            </MasonryLayout>
          )}
        </div>
        {/* Footer */}
        <div className="container-fluid p-0">
          <Footer />
        </div>
      </>
    );
  }
}

export default AppContainer;
