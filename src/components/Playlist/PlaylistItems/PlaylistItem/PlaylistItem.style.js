import styled from "styled-components";

const StyledPlaylistItem = styled.div`
    .flex{
      display: flex;
      padding: 10px 15px;
      justify-content: space-between;
      background: ${props => (props.active && "#0197F6") };
      text-decoration: none;
    }
    .player_video_num {
        flex:  1;
        padding-right: 0px;
        align-self: flex-start;
        width: 10%;
        background: green;
        border-radius: 4px;
        text-align: center;
        font-size: 0.8rem;
        color: #fff;
      }
    .player_video_name,
  .player_video_name a {
    flex:  10; 
    padding: 0 0 0 20px;
    color: white;
    font-family:  "nunito";
    text-align: left;
    text-decoration: none;
    display: block;
    font-size: 0.9rem;
  }
  .player_video_duration {
    background: #565656;
    color: #fff;
    font-size: 0.6em;
    padding: 4px 5px;
    text-align: center;
    border-radius: 5px;
    margin: 0 0 0 5px;
    align-self: flex-start;
    justify-self: center;
  }
`;

export default StyledPlaylistItem;