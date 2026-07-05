const message = `Dear Sidharth,

Hi Sidharth, hope that you are fine and full ready for NDA 2 2026 🔥. 
I'm here to apologize for that silly argument. More than anything, I just want to clear the misunderstanding. Please hear me out 

1.	I hope that you remember that I told a lot disgusting about the training of armies that live at J&K, i.e. that was done by my brother. He was talking about Minecraft. And in reality I don’t do anything, i.e. I am lazy and I accept it 🙂. After seeing these all I started to do overthinking for no reasons, thinking that what would you be thinking of me 😅. In reality at home I have to live like Hamza Ali Marzari AKA as a RAW agent, like I am in an undercover mission due to my stepmother (I hate doing this 😭). 

2.	Now the next thing I want to say is that on 15 march I told many things which is really unbelievable 😅. When I was a child of around 7 yrs. That time my relatives told to my mother that, “in any occasion why doesn’t your daughter participates in dance “so after this she started to send me to dance classes 😭, the fun fact is that I never learned it faithfully and I didn’t learn it 🙂😅. And that last day I also failed 😂😅.  And about swimming, my mother used to send me their (even if I don’t want to 🤧). Going there I only spend their half month only. I know, but no practice 😂😅. I even remember that you asked me about my workout, I am doing that to pass medical after clearing that exam. My hand, only my right hand pains due the stiffness in the joints🙂.
3.	The next thing I want to say is that I know that you read the chat between me and Pallabi. I didn’t write f******* losers because you failed class 11, it has some another reason and I don’t how should I explain it 😅, criticising (even you) hurts me.   And I even think you say my reply as “don’t you know I am mafia 😅” in reality this is a nickname given to me by Pallabi and others due to my behaviour 😅🤧. 

4.	I hope you remember that you remember that Pallabi messaged you “kya re bullet cahalne me drr lg rha tha 😅” in reality I messaged her about me but she misunderstood it 😭🤧. And bullet isn’t a bike it is a project that I am making and I will try to complete ASAP.

5.	On 15 Feb I was crying because I broke my project which took so much time to make it.

6.	And if you will come at farewell and cleared NDA then I request you to come at school in NDA’S UNIFORM 🔥🙇🏻♀️. It would be very proud of you brooo.



Thank you for reading.

— Sakshi 💙`;

let i = 0;

function typeWriter() {

    if (i < message.length) {

        document.getElementById("message").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

    else{

        document.getElementById("finishBtn").style.display="block";

    }

}

function showEnding() {

    document.body.innerHTML = `
    <div class="ending">
        <div class="flower">🌸</div>
        <h1>Thank You</h1>
        <p>
        Some words are easier to write than to say.<br><br>

        Thank you for reading.<br><br>

        Take care of yourself.<br><br>

        — Sakshi 💙
        </p>
    </div>`;
}

window.onload = function () {

    const music = document.getElementById("music");

    music.volume = 0;
    music.play();

    let volume = 0;

    const fadeIn = setInterval(function () {

        if (volume < 0.3) {
            volume += 0.02;
            music.volume = volume;
        } else {
            clearInterval(fadeIn);
        }

    }, 200);

    typeWriter();

};
const music = document.getElementById("music");

let volume = music.volume;

const fadeOut = setInterval(function () {

    if (volume > 0.02) {

        volume -= 0.02;
        music.volume = volume;

    } else {

        clearInterval(fadeOut);
        music.pause();

    }

}, 200);