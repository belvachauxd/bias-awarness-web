const quizData = [
    {
      "id": 1,
      "text": "What is bias?",
      "options": [
        "A. A preference for one thing over another",
        "B. A statistical error",
        "C. A type of research methodology",
        "D. A type of data analysis"
      ],
      "correct": 0
    },
    {
      "id": 2,
      "text": "What is the difference between bias and stereotype?",
      "options": [
        "A. Bias is an individual's attitude, while stereotype is a widely held belief.",
        "B. Bias is based on personal experience, while stereotype is based on socialization.",
        "C. Bias is intentional, while stereotype is unintentional.",
        "D. Bias is a general preference for or against a group, while stereotype is a specific belief about a group."
      ],
      "correct": 3
    },
    {
      "id": 3,
      "text": "What is the difference between explicit bias and implicit bias?",
      "options": [
        "A. Explicit bias is conscious, while implicit bias is unconscious.",
        "B. Explicit bias is negative, while implicit bias is positive.",
        "C. Explicit bias is based on personal experience, while implicit bias is based on socialization.",
        "D. Explicit bias is intentional, while implicit bias is unintentional."
      ],
      "correct": 0
    },
    {
      "id": 7,
      "text": "What is the impact of bias on decision-making?",
      "options": [
        "A. Bias improves decision-making by providing a different perspective.",
        "B. Bias has no impact on decision-making.",
        "C. Bias can lead to unfair and inaccurate decisions.",
        "D. Bias always leads to more accurate decisions."
      ],
      "correct": 2
    },
    {
      "id": 4,
      "text": "What is intersectionality?",
      "options": [
        "A. A statistical method for analyzing data",
        "B. A type of research design",
        "C. The study of the intersections between different forms of oppression",
        "D. A type of data visualization"
      ],
      "correct": 2
    },
    {
      "id": 5,
      "text": "What is the difference between equity and equality?",
      "options": [
        "A. Equity is about treating everyone the same, while equality is about providing equal opportunities.",
        "B. Equity is about providing equal opportunities, while equality is about treating everyone the same.",
        "C. Equity and equality are the same thing.",
        "D. Equity is about providing more opportunities to some people to make up for past disadvantages."
      ],
      "correct": 3
    },
    {
      "id": 8,
      "text": "What is microaggression?",
      "options": [
        "A. A type of macro-level discrimination",
        "B. A subtle form of discrimination that is often unintentional",
        "C. A form of discrimination that is always intentional",
        "D. A type of harassment"
      ],
      "correct": 1
    },
    {
      "id": 7,
      "text": "What is cultural competence?",
      "options": [
        "A. The ability to understand and appreciate different cultures",
        "B. The ability to communicate effectively with people from different cultures",
        "C. The ability to work effectively in a multicultural environment",
        "D. All of the above"
      ],
      "correct": 3
    },
    {
      "id": 9,
      "text": "What is the difference between diversity and inclusion?",
      "options": [
        "A. Diversity is about having a variety of people, while inclusion is about making everyone feel welcome.",
        "B. Diversity and inclusion are the same thing.",
        "C. Diversity is about providing equal opportunities, while inclusion is about treating everyone the same.",
        "D. Diversity is about treating everyone the same, while inclusion is about providing equal opportunities."
      ],
      "correct": 0
    },
    {
      "id": 10,
      "text": "What is privilege?",
      "options": [
        "A. The ability to access resources and opportunities that are not available to others",
        "B. The ability to discriminate against others",
        "C. The ability to ignore social issues",
        "D. The ability to manipulate others"
      ],
      "correct": 0
    },
    {
      "id": 11,
      "text": "What is the impact of bias on workplace productivity?",
      "options": [
        "A. Bias has no impact on workplace productivity.",
        "B. Bias can improve workplace productivity by providing a different perspective.",
        "C. Bias can lead to decreased workplace productivity due to discrimination, exclusion, and demotivation of employees.",
        "D. Bias always leads to increased workplace productivity."
      ],
      "correct": 2
    },
    {
        "id": 12,
        "text": "What is systemic racism?",
        "options": [
          "A. Racism that occurs at the individual level",
          "B. Racism that is built into the policies and practices of institutions",
          "C. Racism that is intentional",
          "D. Racism that occurs in isolated incidents"
        ],
        "correct": 1
      },
      {
        "id": 13,
        "text": "What is the difference between diversity and representation?",
        "options": [
          "A. Diversity is about having a variety of people, while representation is about having people from different backgrounds in visible positions.",
          "B. Diversity and representation are the same thing.",
          "C. Diversity is about providing equal opportunities, while representation is about treating everyone the same.",
          "D. Diversity is about treating everyone the same, while representation is about providing equal opportunities."
        ],
        "correct": 0
      },
      {
        "id": 14,
        "text": "What is cultural appropriation?",
        "options": [
          "A. The act of appreciating and celebrating another culture",
          "B. The act of borrowing elements from another culture without permission or respect for its cultural significance",
          "C. The act of assimilating into another culture",
          "D. The act of preserving one's own culture"
        ],
        "correct": 1
      },
      {
        "id": 15,
        "text": "What is colorism?",
        "options": [
          "A. Discrimination based on skin color",
          "B. Discrimination based on gender identity",
          "C. Discrimination based on age",
          "D. Discrimination based on sexual orientation"
        ],
        "correct": 0
      },
      {
        "id": 16,
        "text": "Your manager consistently gives preferential treatment to employees who share their same hobbies and interests. What is the best way to address this favoritism in the workplace?",
        "options": [
          "A. Start participating in the same hobbies and interests to gain favor.",
          "B. Confront your manager in front of the favored employees.",
          "C. Talk to your manager privately and express your concerns about the favoritism.",
          "D. Ignore the situation and focus on your own work."
        ],
        "correct": 2
      },
      {
        "id": 17,
        "text": "What is the difference between equity and justice?",
        "options": [
          "A. Equity is about providing equal opportunities, while justice is about punishing wrongdoings.",
          "B. Equity and justice are the same thing.",
          "C. Equity is about treating everyone the same, while justice is about treating everyone fairly based on their individual circumstances.",
          "D. Equity is about providing more opportunities to some people to make up for past disadvantages, while justice is about protecting people's rights and dignity."
        ],
        "correct": 3
      },
      {
        "id": 18,
        "text": "What is the impact of unconscious bias in the hiring process?",
        "options": [
          "A. Unconscious bias can improve the quality of the hiring process by providing a different perspective.",
          "B. Unconscious bias has no impact on the hiring process.",
          "C. Unconscious bias can lead to unfair hiring decisions and lack of diversity in the workplace.",
          "D. Unconscious bias always leads to more accurate hiring decisions."
        ],
        "correct": 2
      },
      {
        "id": 19,
        "text": "A male coworker consistently interrupts and talks over your female coworker during meetings. What is the best way to address this gender bias in the workplace?",
        "options": [
          "A. Confront the male coworker during the meeting.",
          "B. Talk to the female coworker and offer her support.",
          "C. Ignore the situation and let them handle it themselves.",
          "D. Bring up the issue with the male coworker privately and suggest better communication practices."
        ],
        "correct": 3
      },
      {
        "id": 20,
        "text": "Your colleague is consistently praised by your manager despite their poor performance. What is the best way to address this bias in the workplace?",
        "options": [
          "A. Confront your manager in front of your colleague.",
          "B. Talk to your colleague about their poor performance.",
          "C. Speak to your manager privately and provide feedback on your colleague's performance.",
          "D. Ignore the situation and focus on your own work."
        ],
        "correct": 2
      }
]

export default quizData;
