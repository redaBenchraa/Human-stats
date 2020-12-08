<style>
  .button {
    position: relative;
    border: none;
    transition: all 0.5s;
    overflow: hidden;
  }

  .button span {
    position: relative;
    cursor: pointer;
    display: inline-block;
    transition: 0.5s;
  }

  .button span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  .button:hover span {
    padding-right: 25px;
  }
  .button:hover span:after {
    opacity: 1;
    right: 0;
  }
  .button:after {
    content: "";
    background: #9eb9ff;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -100px !important;
    margin-top: -100%;
    opacity: 0;
    transition: all 0.8s;
    border-radius: 50%;
  }

  .button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
    border-radius: 50%;
  }
</style>

<div
  class="button select-none active:bg-buttonDark  bg-button cursor-pointer h-auto w-min py-4 px-10 m-3 mx-auto shadow-lg font-bold text-2xl rounded-button text-white">
  <span>Calculate</span>
</div>
