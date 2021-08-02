import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import BlogBox from "./BlogBox";
import ScrollToTop from "./ScrollToTop";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 0,
          image: "assets/images/blog/game-play-800h.jpg",
          category: "Lorem ipsum",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
        },
        {
          id: 1,
          image: "assets/images/blog/ROG.jpg",
          category: "Lorem ipsum",
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
        },
        {
          id: 2,
          image: "assets/images/blog/SL.jpg",
          category: "Lorem ipsum",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
        },
      ],
    };
  }

  render() {
    return (
      <section className="section pt-5" id="blog">
        <Container>
          {/* section title */}
          <SectionTitle
            title="NEWS"
            desc="Stay up to date with the latest news."
          />
          <ScrollToTop>
            <Row className="mt-4">
              {/* blog box */}
              <BlogBox blogs={this.state.blogs} />
            </Row>
          </ScrollToTop>
        </Container>
      </section>
    );
  }
}

export default Blog;
