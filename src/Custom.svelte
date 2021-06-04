<script>
    export let location;

    let age = '';
    let gender = '';
    let customHeight = 100;

    function handleClick() {
        var list = document.getElementById("tag")
        if (list.childNodes[0]) {
            list.removeChild(list.childNodes[0]);
        }
        var node = document.createElement("P");
        var string = "There are 149,000 " + age + " year old " + (gender=="Male"?"men":"women") + " living in " + location + ".";
        var textnode = document.createTextNode(string);
        node.appendChild(textnode);
        document.getElementById("tag").appendChild(node);
        document.getElementById("custom-section").style.height = "250px";
    }
    
</script>

<style>
    #custom-section{
        height: 200px;
    }
    .btn-default {
        color: #333333;
        background-color: #e7e7e7;
        border-color: #cccccc;
    }
    .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active {
        color: #333333;
        background-color: #cecece;
        border-color: #adadad;
    }
    .text-input {
        overflow: auto;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 30%;
        margin-top: 5%;
        padding-left: 7%;
        padding-right: 7%;
        padding: 1% 1% 1% 10%;
    }
    .btn-group {
        overflow: auto;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: fit-content;
    }
    .btn-label {
        overflow: auto;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: fit-content;
    }
    .btn-primary {
        background-color: #008cba;
        border-color: #0079a1;
        color: #ffffff;
        padding: 8px 12px;
        font-weight: bold;
        width: 100%;
        margin-top: 10%;
    }
    .btn-primary:hover {
        background-color: #0884ad;
    }
    .btn-primary:active {
        background-color: #056f92;
    }
    .input1 {
        width: 25%;
        float: left;
        margin: 4%;
    }
    .inputCont {
        height: 200px;
    }
</style>

<div id="custom-section">
    <div class="inputCont">
        <div class="input1">
            <p class="btn-label">
                What is your age?
            </p>
            <input class="text-input" type="number" bind:value={age}>
        </div>
        <div class="input1">
            <p class="btn-label">
                Are you male or female?
            </p>
            <div class="btn-group" id="btn-group_this" data-toggle="buttons">
                <label class={(gender=="Male" ? "btn btn-default active" : "btn btn-default")} id="btn-primary1">
                    <input type="radio" bind:group={gender} value={"Male"}>Male
                </label>
                <label class={(gender=="Female"? "btn btn-default active" : "btn btn-default")} id="btn-primary2">
                    <input type="radio" bind:group={gender} value={"Female"}>Female
                </label>
            </div>
        </div>
        <div class="input1">
            <button class="btn-primary" on:click={handleClick}>Customise data</button>
        </div>
    </div>

    <div class="custom-sentence">
        <p id="tag"></p>
    </div>
</div>