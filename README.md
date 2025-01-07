# Brain Buster

Brain Buster is an interactive web application designed to test and enhance your aptitude skills. The platform offers a variety of questions across difficulty levels to challenge your problem-solving abilities. It features a login system, random question generation, and a vast database of over 5000 questions to ensure unique tests every time.

## Features

- **Random Question Generation**: Generates 50 random questions from Easy, Medium, Hard, and Higher-Order Thinking categories for each test.
- **User Login System**: Secure login system to track progress.
- **Large Question Bank**: Over 5000 questions in the database, ensuring randomness without repetition.
- **Interactive UI**: User-friendly interface for smooth navigation.

## Installation

To set up the project locally, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed or access to a MongoDB Atlas instance
- Git installed

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Vikas2604/brain-buster.git
   cd brain-buster
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     PORT=3000
     JWT_SECRET=<your-secret-key>
     ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. **Login/Register**:
   - Users need to create an account or log in to start taking tests.

2. **Start a Test**:
   - The application randomly selects 50 questions from the database.

3. **Submit Answers**:
   - After completing the test, submit answers to view your score.

4. **Review Performance**:
   - Users can review their answers and analyze their performance.

## Project Structure

```
brain-buster/
├── public/         # Static assets (HTML, CSS, JS)
├── src/            # Application source code
│   ├── models/     # MongoDB schemas
│   ├── routes/     # API routes
│   ├── controllers # Logic for handling requests
│   ├── utils/      # Helper functions
├── .env            # Environment variables
├── .gitignore      # Ignored files
├── package.json    # Project dependencies and scripts
├── README.md       # Project documentation
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, contact:
- **Author**: Aryan, Gowthami, Saikumar, Vikas. 
- **GitHub**: [Aryan](https://github.com/AryanYogesh) [Gowthami](https://github.com/Gowthami-BN)[Saikumar](https://github.com/saikumar9136)[Vikas](https://github.com/Vikas2604)

---

Happy coding! 🎉
