import { useParams } from 'react-router-dom';

export const QuestionPage = () => {
    const { questionId } = useParams();

    const questionData = [
        { id: 1, question: "What is 2+2?", options: ["3", "4", "5"], answer: "4" },
    ];

    const question = questionData.find(q => q.id === parseInt(questionId));

    return (
        <div>
            <h2>Question {question.id}</h2>
            <p>{question.question}</p>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionPage;
