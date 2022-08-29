// FUNCTIONS GO HERE

    // Disabling buttons
    function disable_buttons() {
        document.getElementById("button1").hidden = true;
        document.getElementById("button2").hidden = true;
        document.getElementById("button3").hidden = true;
        document.getElementById("button4").hidden = true;
        document.getElementById("button5").hidden = true;
        document.getElementById("button6").hidden = true;
        document.getElementById("button7").hidden = true;
        document.getElementById("button8").hidden = true;
        document.getElementById("button9").hidden = true;
        document.getElementById("button10").hidden = true;
    }

    // Slide View_Options tab
    function slide_options() {
        const bg_options = document.getElementById("options");
        bg_options.style.height = '40%';
        bg_options.style.top = '65%';
    }

    // Change Poses
    function change_pose(path) {
        document.getElementById("pose").src = path;
        return;
    }

    // activate_buttons
    function activate_buttons(activate) {
        for (const to_activate of activate) {
            var text = "button";
            document.getElementById(text.concat(to_activate.toString())).display = unset;
        }
    }

    // dialogue_change
    function dialogue_change(dialogue) {
        document.getElementById("dialogue-text").value = dialogue;
    }

    // option_texts
    function option_texts(texts) {
        for (let number = 1; number <= texts.length; number++) {
            var text = "button";
            document.getElementById(text.concat(number.toString())).textContent = texts[number-1];
        }
    }

    // spawn textbox
    function spawn_textbox(){
        document.getElementById("user_input").disabled = false
    }

    // -------------------- END FUNCTIONS ----------------------------

    // CASES GO HERE

    // Elemntal return
    function Return_to_Questions(){
        document.getElementById("speech-bubble").hidden = false;
        document.getElementById("dialogue-text").hidden = false;
        document.getElementById("button1").hidden = false;
        document.getElementById("button2").hidden = false;
        document.getElementById("button3").hidden = false;
        document.getElementById("button4").hidden = false;
        document.getElementById("button5").hidden = false;
        document.getElementById("button6").hidden = false;
        document.getElementById("button7").hidden = false;
        document.getElementById("button8").hidden = false;
        document.getElementById("button9").hidden = false;
        document.getElementById("button10").hidden = false;
        document.getElementById("return_button").hidden = true;

        change_pose("images/welcome.png");
        dialogue_change("Welcome back! Which question can I answer for you?");
        option_texts(["Where is the Imaginarium located?", "What are the opening hours for the Imaginarium?", "What equipment and software do we use in the Imaginarium?", "Do I need any prior experience with VR or data visualization?", "How can I schedule a visit or demo at the Imaginarium?", "Can I start or work on a project at the Imaginarium?", "Who can I contact with further questions?", "What is the Imaginarium's mission?", "What do we do at the Imaginarium?", "What are some research projects the Imaginarium is working on?"]);

        document.getElementById('button1').setAttribute('onclick','Question1()');
        document.getElementById('button2').setAttribute('onclick','Question2()');
        document.getElementById('button3').setAttribute('onclick','Question3()');
        document.getElementById('button4').setAttribute('onclick','Question4()');
        document.getElementById('button5').setAttribute('onclick','Question5()');
        document.getElementById('button6').setAttribute('onclick','Question6()');
        document.getElementById('button7').setAttribute('onclick','Question7()');
        document.getElementById('button8').setAttribute('onclick','Question8()');
        document.getElementById('button9').setAttribute('onclick','Question9()');
        document.getElementById('button10').setAttribute('onclick','Question10()');


    }

    // Question 1
    function Question1() {
        disable_buttons();
        
        document.getElementById("return_button").hidden = false;

        change_pose("images/responding.png");
        dialogue_change("The Imaginarium is located in Heafey 237. You can find us by walking to the back of Heafey and going up the stairs.");

        /*document.getElementById("button1").hidden = false;
        option_texts(["Map to Imaginarium"]);
        document.getElementById('button1').setAttribute('onclick','Map()');
        */
        document.getElementsById("return_button").setAttribute('onclick','Return_to_Questions()');
    }

    // MAP Button
    function Map(){
        disable_buttons();
        change_pose("images/map.png");
        document.getElementById("speech-bubble").hidden = true;
        document.getElementById("dialogue-text").hidden = true;

        document.getElementById("return_button").hidden = false;
        document.getElementsById("return_button").setAttribute('onclick','Question1_Map()');

        document.getElementById("pose").style.marginTop = '0px';
        document.getElementById("pose").style.marginBottom = '0px';
    }

    // Question 2
    function Question2() {
        disable_buttons();
        document.getElementById("return_button").hidden = false;

        change_pose("images/responding.png");
        dialogue_change("The Imaginarium is open from 10 AM to 5 PM on Weekdays. Emphasis on the weekdays.");
    }

    // Question 3
    function Question3() {
        disable_buttons();
        document.getElementById("return_button").hidden = false;

        change_pose("images/responding.png");
        dialogue_change("We have 20 high-performance workstations, 20 HP Reverb VR headsets, 1 Varjo Aero, 15 Oculus Rifts, 1 Oculus Quest, 4 HTC Vive Pro Eye headsets, and software products including Adobe Creative Cloud, Blender, and Unity");
    }

    // Question 4
    function Question4() {
        disable_buttons();
        document.getElementById("return_button").hidden = false;

        change_pose("images/responding.png");
        dialogue_change("Nope");
    }

    // Question 5
    function Question5() {
        disable_buttons();
        document.getElementById("return_button").hidden = false;

        change_pose("images/responding.png");
        dialogue_change("You can contact the lab manager Emily Dang. Her contact is: edang1@scu.edu");
    }

    // Question 6
    function Question6() {
        disable_buttons();
        document.getElementById("return_button").hidden = false;

        change_pose("images/responding.png");
        dialogue_change("If you are a member of SCU with an individual project, you are welcome to visit the Wave+Imaginarium during open hours to work on your project. If you are SCU faculty seeking out space, equipment, or student workers for a project, please contact Emily Dang (edang1@scu.edu) and David Jeong (dcjeong@scu.edu) with your questions.");
    }

    // Question 7
    function Question7() {
        disable_buttons();
        document.getElementById("return_button").hidden = false;

        change_pose("images/responding.png");
        dialogue_change("Please contact Emily Dang (edang1@scu.edu) or David Jeong (dcjeong@scu.edu) for further questions");
    }

    // Question 8
    function Question8() {
        disable_buttons();
        document.getElementById("return_button").hidden = false;

        change_pose("images/responding.png");
        dialogue_change("We aim to create a space where students and faculty can use immersive art, data visualization, and human interaction to create projects that emphasize social responsibility, collaboration, and engagement");
 
    }

    // Question 9
    function Question9() {
        disable_buttons();
        document.getElementById("return_button").hidden = false;
        

        change_pose("images/responding.png");
        dialogue_change("We are a collaborative and interdisciplinary space dedicated to mixed reality (VR, AR, mixed reality), data visualization, digital art, and game design.");
    }

    // Question 10
    function Question10() {
        disable_buttons();
        document.getElementById("return_button").hidden = false;
        document.getElementById("button1").hidden = false;
        document.getElementById("button2").hidden = false;
        document.getElementById("button3").hidden = false;
        option_texts(["What is Robocrop?", "What is RestlessVR?", "What is SCU Volumetric Capture?"]);
        document.getElementById('button1').setAttribute('onclick','Robocrop()');
        document.getElementById('button2').setAttribute('onclick','RestlessVR()');
        document.getElementById('button3').setAttribute('onclick','SCU_Volumetric_Capture()');
        document.getElementById('return_button').setAttribute('onclick','Return_to_Questions()');
        change_pose("images/responding.png");
        dialogue_change("Some projects we are working on are Robocrop, RestlessVR, and SCU Volumetric Capture");
    }

    function Robocrop(){
        disable_buttons();
        document.getElementById("return_button").hidden = false;
        document.getElementById('return_button').setAttribute('onclick','Question10()');
        dialogue_change("A VR game about practicing sustainability");
    }

    function RestlessVR(){
        disable_buttons();
        document.getElementById("return_button").hidden = false;
        document.getElementById('return_button').setAttribute('onclick','Question10()');
        dialogue_change("A VR experience depicting social anxiety");
    }

    function SCU_Volumetric_Capture(){
        disable_buttons();
        document.getElementById("return_button").hidden = false;
        document.getElementById('return_button').setAttribute('onclick','Question10()');
        dialogue_change("A virtual 3D recreation of the SCU Campus");
    }




    function CaseTyping() {
        change_pose("images/listening_to_typing.png");
        disable_buttons();
        spawn_textbox();
        dialogue_change("...");
    }
