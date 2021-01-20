import React from "react";
//import axios from "axios";
//import Movie from "../components/Movie";
import Member from "../components/Member";
import "./MemberContainer.css";

class MemberContainer extends React.Component {
  state = {
    isLoading: false,
    //movies: [],
    members: [
        {
            name: '한재희',
            job: 'PM',
            email: 'jh.han@eatech.kr',
            tel: '010-2692-7481'
        },
        {
            name: '이태훈',
            job: '개발팀장',
            email: 'th.lee@eatech.kr',
            tel: '010-4222-6886'
        },
        {
            name: '김종완',
            job: '개발자',
            email: 'jw.kim@eatech.kr',
            tel: '010-2340-5171'
        },
        {
            name: '엄대정',
            job: '개발자',
            email: 'dj.eom@eatech.kr',
            tel: '010-9136-7473'
        }
    ],
  };
  /*getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  
  componentDidMount() {
    this.getMovies();
  }*/

  render() {
    const { isLoading, members } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="members">
            {members.map(member => (
              <Member
                name={member.name}
                job={member.job}
                email={member.email}
                tel={member.tel}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default MemberContainer;
