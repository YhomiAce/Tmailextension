
$(window).on("load",()=>{

    function appendButton()
    {
        var headerElement = $(".img.selector.header-title");
        console.log(headerElement);

        const emailBtnDiv = '<div class="text" style="display: inline-block;margin-left: 25px;"><a id="thatAppPodioBtn" style="margin-bottom:0;background:#D7A417;cursor:pointer;padding: 5px 10px;color:#fff !important; font-size:1.4rem" title="Send a new Email about this Item">T-Email</a></div>'
        var emailBtnList = document.createElement("li");
        
        emailBtnList.innerHTML = emailBtnDiv;
        const newList = [];
        console.log(headerElement.find("li"));

        headerElement.find("li").each((i, elem) =>{
            newList.push(elem)
            if (i === 1) {
                newList.push(emailBtnList);
            }
        })

        $(".img.selector.header-title").html(newList);
        

        var itemId = $("#wrapper").attr("data-context-id");
        
        console.log(itemId);

        

        $("#thatAppPodioBtn").click(function(){
            url = "http://localhost:3000/new-tmail-message/"+itemId;
            OpenNewWindow(url);
        })
    }

    function setupAppButton(){
        console.log("Start check",$("#thatAppPodioBtn").length );
        if ($("#thatAppPodioBtn").length < 1) {
            console.log("Adding button...");
            setTimeout(()=>{
                appendButton()
                setupAppButton()
                getComment()

            }, 2000)
        }else{
            console.log("Button exists");
        }
        console.log("Done checking");
    } 

    setupAppButton();
});




// window.onload = function(){
//     // injectCode()
//     console.log("document loaded");

//     const btn = document.createElement('button');
//     var li = document.createElement("li");
//     const elems = document.getElementsByClassName('img selector header-title');

//     console.log(`Elements here: ${elems}`);
//     console.log(elems[0]);
//     const div = document.createElement("div");
//     div.className = "text";
//     div.style.display = "inline-block";
//     div.style.marginLeft = "25px";
//     // alert(elems.length)
//     btn.innerHTML = "Email Here";
//     btn.id = "thatAppPodioBtn";
//     btn.type = 'button';
//     btn.className = "text";
//     btn.style.display = "inline-block";
//     btn.style.padding = "10px 12px";
//     btn.style.margin = "10px";
//     btn.style.background = "#d9edf7";
//     btn.style.color = "#31708f !important";
//     btn.style.border = "1px dotted #31708f";
//     btn.style.cursor = "pointer"
//     // document.body.appendChild(btn)
//     div.appendChild(btn)
//     li.appendChild(div)

//     elems[0].appendChild(li)
//     document.getElementById("thatAppPodioBtn").addEventListener("click", function(){
//         url = "http://localhost:3000/tmail-message";
//         OpenNewWindow(url);
//     })

    
// };

function OpenNewWindow(MyPath)
{
    window.open(MyPath,"","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=600,width=900");
}
// setTimeout(injectCode(), 5000)


// function injectCode(){
//     const btn = document.createElement('button');
//     var li = document.createElement("li");
//     const elems = document.getElementsByClassName('img selector header-title')[0];

//     console.log(`Elements here: ${elems}`);
//     // alert(elems.length)
//     btn.innerHTML = "Email Here";
//     btn.id = "thatAppPodioBtn";
//     btn.type = 'button';
//     btn.style.padding = "10px 12px";
//     btn.style.margin = "10px";
//     btn.style.background = "#d9edf7";
//     btn.style.color = "#31708f !important";
//     btn.style.border = "1px dotted #31708f";
//     btn.style.cursor = "pointer"
//     // document.body.appendChild(btn)
//     li.appendChild(btn)
//     elems.appendChild(li)
//     document.getElementById("thatAppPodioBtn").addEventListener("click", function(){
//         alert("It worked")
//     })
// }



function getComment(){
    const replyEmailBtnDiv = '<div class="text" style="display: inline-block;margin-left: 25px;"><a class="thatAppPodioBtn" style="margin-bottom:0;background:#F7C948;font-size:18px;cursor:pointer;padding: 7px 10px;color:#fff !important" title="Send a new Email about this Item">Reply Email</a></div>'
    var replyEmail = document.createElement("p");
    replyEmail.innerHTML = replyEmailBtnDiv
 
    $(".markdown.collapsed > p:contains('Tmail message')").parent().addClass("tmail-comment");
    // const commentDivs = $('.markdown.collapsed');
    const replyBtn = $(".tmail-comment a:contains('Reply')")
    replyBtn.css({background: "#D7A417", padding:"5px 10px", color:"#fff", fontSize:"12px", fontWeight: "bold"});
    replyBtn.addClass("replyTmail")
    const fwdBtn = $(".tmail-comment a:contains('Fwd')")
    fwdBtn.css({background: "#D7A417", padding:"5px 10px", color:"#fff", fontSize:"12px", fontWeight: "bold"});
    fwdBtn.addClass("replyTmail");

    $(".replyTmail").click(e=>{
        e.preventDefault();
        var url = e.target.href;
        console.log(e, url);
        OpenNewWindow(url);
    })
    
}
