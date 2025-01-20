# Brain Buster

Brain Buster is an interactive web application designed to test and enhance your aptitude skills. The platform offers a variety of questions across different difficulty levels to challenge your problem-solving abilities. It features a secure login system, random question generation, and a vast database of over 5000 questions to ensure unique tests every time.

## Features

- **Random Question Generation**: Generates 50 random questions from Easy, Medium, Hard, and Higher-Order Thinking categories for each test.
- **User Login System**: Secure login system to track user progress.
- **Large Question Bank**: Over 5000 questions in the database, ensuring randomness without repetition.
- **Interactive UI**: User-friendly interface for smooth navigation.

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed or access to a MongoDB Atlas instance
- Git installed

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Vikas2604/brain-buster.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd brain-buster
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key
   ```

5. **Start the development server**:

   ```bash
   npm start
   ```

6. **Access the application**:

   Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

- **Sign Up/Login**: Create a new account or log in with existing credentials.
- **Start a Test**: Begin a new test to receive 50 random questions.
- **Submit Answers**: Answer all questions and submit to receive your score.
- **Review Performance**: Analyze your performance and identify areas for improvement.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

*Note: This README is based on the information available in the repository and may need adjustments to align with the specific details of your project.*
