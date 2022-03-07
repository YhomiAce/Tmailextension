
$(window).on("load",()=>{

    function appendButton()
    {
        var headerElement = $(".img.selector.header-title");
        console.log(headerElement);

        const emailBtnDiv = '<div class="text" style="display: inline-block;margin-left: 25px;"><a id="thatAppPodioBtn" class="button-new gm-btn-btn gm-btn-ltbl" style="margin-bottom:0" title="Send a new Email about this Item">T-Email</a></div>'
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
            url = "http://localhost:3000/tmail-message/"+itemId;
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



