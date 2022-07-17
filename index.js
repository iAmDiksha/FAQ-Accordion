
const questions = document.getElementsByClassName('question');

let i = 0;
while(i<questions.length)
{
    questions[i].addEventListener('click',function(){
        this.classList.toggle('active');

        const answer = this.nextElementSibling;

        if(answer.style.display === 'block')
        {
            answer.style.display = 'none';
        }
        else{
            answer.style.display = 'block';
        }
    })

    i++;
}