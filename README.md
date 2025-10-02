# COMP 3123 - Full Stack Development I - Lab Test 1

**Student ID:** 101464867
**Student Name:** Lakshay Dhawan

## Project Overview

This project is a submission for the Lab Test 1 in the COMP 3123 Full Stack Development course. It demonstrates proficiency in fundamental JavaScript (ES6) and Node.js concepts, including Promises, array manipulation, and file system operations. The project is organized into three distinct questions, each addressing a specific set of requirements.

## Question 1: ES6 Features

This section focuses on using modern JavaScript features to manipulate arrays and handle asynchronous operations with Promises.

### `lowerCaseWords.js`

This script exports a function called `lowerCaseWords` that processes an array containing a mix of data types.

**Functionality:**
*   It returns a `Promise`, which is a common way to handle asynchronous operations.
*   The function filters the input array to keep only the elements that are strings.
*   It then converts all the filtered strings to lowercase.
*   If the input is not an array, the promise is rejected with an error.

**Execution and Output:**

When the script is run, it tests the function with a sample array and prints the successful result to the console.

**Output:**
```
[ 'pizza', 'wings', 'pasta', 'fries' ]
```

---

## Question 2: Promises

This section demonstrates the creation and handling of Promises to manage delayed asynchronous tasks.

### `callbacks.js`

This script contains two functions, `resolvedPromise` and `rejectedPromise`, that simulate asynchronous operations.

**Functionality:**
*   **`resolvedPromise`:** Returns a `Promise` that resolves after a 500ms delay, returning a success message object.
*   **`rejectedPromise`:** Returns a `Promise` that rejects after a 500ms delay, returning an error object.
*   The script then calls both functions and uses `.then()` to handle the successful resolution and `.catch()` to handle the rejection, printing the respective outcomes to the console.

**Execution and Output:**

The script logs the start of the test, and after the timeout, it prints the results from both promises.

**Output:**
```
Testing started...
{ message: 'Delayed Success!' }
{ error: 'Delayed Exception!' }
```

---

## Question 3: File Module

This section involves using the built-in Node.js `fs` and `path` modules to interact with the file system. It is divided into two scripts: one for creating log files and another for removing them.

### `add.js`

This script is responsible for creating a directory and a set of log files within it.

**Functionality:**
*   It checks if a directory named `Logs` exists.
*   If the directory does not exist, it creates one.
*   The script then changes the current process's working directory into the `Logs` directory.
*   Finally, it creates 10 text files, `log0.txt` through `log9.txt`, writing a simple message into each one and logging the file names to the console.

**Execution and Output:**

When run for the first time, this script will create the `Logs` directory and the 10 files.

**Output (First Run):**
```
Logs directory was created.
Current working directory: ...\101464867_COMP3123_LABTEST1\question-3\Logs
Creating log files:
log0.txt
log1.txt
log2.txt
log3.txt
log4.txt
log5.txt
log6.txt
log7.txt
log8.txt
log9.txt
Log files created successfully.
```

### `remove.js`

This script is responsible for cleaning up the directory and files created by `add.js`.

**Functionality:**
*   It checks if the `Logs` directory exists.
*   If it exists, the script reads the contents of the directory.
*   It then iterates through the files, printing a message for each file being deleted and removing them one by one.
*   After all files have been deleted, the now-empty `Logs` directory is also removed.

**Execution and Output:**

Running this script after `add.js` will delete the files and the directory.

**Output:**
```
Logs directory exists. Proceeding to delete files and directory...
delete files...log0.txt
delete files...log1.txt
delete files...log2.txt
delete files...log3.txt
delete files...log4.txt
delete files...log5.txt
delete files...log6.txt
delete files...log7.txt
delete files...log8.txt
delete files...log9.txt
Logs directory removed.
```