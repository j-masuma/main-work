

//import './styles.css';
import parrot from "../assets/images/parotimg.svg";
//import usericon from "../images/usericonn.png"
//import sendicon from "../images/sendicon.jpeg"
//import { Document, Page } from 'react-pdf';
const ChatWithpdf = ({ pdfUrl }) => {
  
  return (
    <div className='Chats' style={{ backgroundColor: "black", color: "white", height: "100vh", fontFamily: 'Poppins, sans-serif', display: 'flex' }}>
      {/* Adjust flex ratio to 6 for 60% width */}
      <div className="sideBar" style={{ flex: "6", borderRight: "1px solid white", overflowY: "auto", display: 'flex', flexDirection: 'column', padding: "10px", maxHeight: "100vh" }}>
      
      </div>
      
      {/* Adjust flex ratio to 4 for 40% width */}
      <div className="main" style={{ minHeight: "calc(100vh-15rem)", display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem", flex: "4", marginBottom: "5px" }}>
        <h2>Chat with PDF</h2>
        <div className="botTone">
          <button id="tone">Tone</button>
          <button id="tone">Tone</button>
          <button id="tone">Tone</button>
        </div>
        <div className="chats" style={{ overflow: "hidden", overflowY: "scroll", scrollBehavior: 'smooth', width: "100%", maxWidth: "70rem", height: "calc(100vh - 7rem)" }}>
          <div className="chat" style={{ textAlign: "justify", margin: "0.5", padding: "1rem 2rem", fontSize: "0.85rem", display: "flex", alignItems: "flex-start" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
            {/* <img style={{ objectFit: "cover", width: "3rem", marginRight: "1rem", borderRadius: "0.5rem" }} src={usericon} alt="" className="logo" width="50" height="50" />
            */}
            <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat aliquid minima Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo facere molestiae similique, harum consequatur incidunt excepturi illum voluptatum consequuntur illo!adipisci architecto aut odio iste incidunt aperiam obcaecati!</p> 
          </div>
          <div className="chat bot" style={{ textAlign: "justify", margin: "0.5rem", padding: "1rem 2rem", fontSize: "0.85rem", display: "flex", alignItems: "flex-start" }}>
            <img style={{ objectFit: "cover", width: "3rem", marginRight: "1rem", borderRadius: "0.5rem" }} src={parrot} alt="" className="logo" width="50" height="50" />
            <p className="txt">Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid fugit veniam cum porro praesentium hic consequatur ipsum voluptatem recusandae doloremque rem quo a dignissimos, quibusdam commodi pariatur architecto quaerat voluptatum illum. Maiores neque mollitia excepturi! Necessitatibus soluta omnis ducimus voluptatem consequatur nostrum corporis magnam labore, nam a sapiente at quisquam minima mollitia eligendi, dolorum rerum fuga dignissimos nobis deserunt pariatur ea. Sapiente ex molestias expedita aperiam suscipit cumque quos officiis. Laboriosam dolorem praesentium dicta velit eaque minus veritatis rerum vero corrupti provident quisquam doloribus nemo, dolore eum ipsum dignissimos tempore itaque aut obcaecati repellendus voluptatum at aperiam perspiciatis. Omnis, numquam.ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat aliquid minima adipisci architecto aut odio iste incidunt aperiam obcaecati!</p>
          </div>
        </div>
        <div className="chatFooter" style={{ marginTop: "auto", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className="inp" style={{ padding: "5px", backgroundColor: "white", display: "flex", alignItems: "center", borderRadius: "0.5rem", width: "30rem", margin: "8px" }}>
            <input
              type="text"
              placeholder='Send a message'
              style={{
                backgroundColor: "transparent",
                border: "none",
                width: "calc(100% - 3rem)",
                height: "20px",
                outline: "none",
                marginRight: "0.5rem",
                flexGrow: 1,
                overflow: "hidden"
              }}
            /> <button className="send" style={{ backgroundColor: "transparent", border: "none" }}>
              {/* <img src={sendicon} alt="" className="logo" width="30" height="30" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
            </button>
          </div>
          <p className="m-2" style={{ fontSize: "12px" }}>LearnEase may produce incorrect information about people, places or facts.</p>
        </div>
      </div>
    </div>
  );
}

export default ChatWithpdf;