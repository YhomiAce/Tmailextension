
// $(window).on("load",()=>{

//     function appendButton()
//     {
//         var headerElement = $(".img.selector.header-title");
//         console.log(headerElement);

//         const emailBtnDiv = '<div class="text" style="display: inline-block;margin-left: 25px;"><a id="thatAppPodioBtn" style="margin-bottom:0;background:#D7A417;cursor:pointer;padding: 5px 10px;color:#fff !important; font-size:1.4rem" title="Send a new Email about this Item">T-Email</a></div>'
//         var emailBtnList = document.createElement("li");
        
//         emailBtnList.innerHTML = emailBtnDiv;
//         const newList = [];
//         console.log(headerElement.find("li"));

//         headerElement.find("li").each((i, elem) =>{
//             newList.push(elem)
//             if (i === 1) {
//                 newList.push(emailBtnList);
//             }
//         })

//         $(".img.selector.header-title").html(newList);
        

//         var itemId = $("#wrapper").attr("data-context-id");
        
//         console.log(itemId);

        

//         $("#thatAppPodioBtn").click(function(){
//             url = "http://localhost:3000/new-tmail-message/"+itemId;
//             OpenNewWindow(url);
//         })
//     }

//     function setupAppButton(){
//         console.log("Start check",$("#thatAppPodioBtn").length );
//         if ($("#thatAppPodioBtn").length < 1) {
//             console.log("Adding button...");
//             setTimeout(()=>{
//                 appendButton()
//                 setupAppButton()
//                 getComment()

//             }, 2000)
//         }else{
//             console.log("Button exists");
//         }
//         console.log("Done checking");
//     } 

//     setupAppButton();
// });

    function appendButton()
    {
        var headerElement = $(".img.selector.header-title");
        // console.log(headerElement);

        const emailBtnDiv = '<div class="text" style="display: inline-block;margin-left: 25px;"><a id="thatAppPodioBtn" style="margin-bottom:0;background:#D7A417;cursor:pointer;padding: 5px 10px;color:#fff !important; font-size:1.4rem" title="Send a new Email about this Item">T-Email</a></div>'
        var emailBtnList = document.createElement("li");
        
        emailBtnList.innerHTML = emailBtnDiv;
        const newList = [];
        // console.log(headerElement.find("li"));

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

    

    const parent = document.body;

    function getComment(){
        // console.log("Get comment something");
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
            // console.log(e, url);
            OpenNewWindow(url);
        })
        
    }

    
    const callback = function setupAppButton(){
        console.log("Start check",$("#thatAppPodioBtn").length );
        if ($("#thatAppPodioBtn").length < 1) {
            console.log("Adding button...");
            appendButton()
            
        }else{
            console.log("Button exists");
        }
        console.log("Done checking");
        getComment()
    }

    const mutationObserver = new MutationObserver(callback);
    mutationObserver.observe(parent, {
        subtree: true,
        childList: true,
        characterData: true
    });
    // mutationObserver.disconnect();


function OpenNewWindow(MyPath)
{
    window.open(MyPath,"","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=600,width=900");
}


