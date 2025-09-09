#### Questions and Answer:

#### 1) What is the difference between var, let, and const?
## var, let, ও const ভেরিয়েবল ডিক্লেয়ারে জন্য ব্যবহৃত কিয়ার্ড। তবে এদের মধ্যে কিছু পার্থক্য রয়েছে। যেমন:
## var: এটি একটি ফাংশন স্কোপ, এটি পুরো ফাংশনের ভেতরে যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়, পুনরায় ডিক্লেয়ার করা যায়। এটি পুরাতন পদ্ধতি।
## let: এটি একটি ব্লক স্কোপ। একই স্কোপে পুনরায় ডিক্লেয়ার করা যায় না তবে মান পরিবর্তন করা যায়। Hoisted হয় কিন্তু Temporal Dead Zone থাকে, এর কারণে আগে থেকে ব্যবহার করা যায় না।
## const: এটিও একটি ব্লক স্কোপ। পুনরায় ডিক্লেয়ার বা রি-অ্যাসাইন করা যায় না। Hoisted হয় কিন্তু Temporal Dead Zone থাকে, এর কারণে আগে থেকে ব্যবহার করা যায় না।

#### 2) What is the difference between map(), forEach(), and filter()? 
## সবগুলোই array ফাংশন।
## map() : প্রতিটি array এলিমেন্ট এর উপর একটি কলবেক ফাংশন চালায় এবং নতুন একটি array রিটার্ন করে। অরিজিনাল array এর কোন পরিবর্তন হয় না।
## forEach(): প্রতিটি array element এর উপর loop চালায় কিন্তু কিছু রিটার্ন করে না।
## filter(): প্রতিটি element চেক করে শর্ত অনুযায়ী একটি নতুন array রিটার্ন করে।

#### 3) What are arrow functions in ES6?
## স্বাভাবিক ফাংশনের একটি সংক্ষিপ্ত রূপ হচ্ছে এরে ফাংশন। চাইলে ১লাইনে একটি ফাংশন লিখা যায়। এক লাইনের জন্য {} ও return বাদ দেওয়া যায়।   
#### 4) How does destructuring assignment work in ES6?
## Destructuring assignment হলো ES6-এর একটি ফিচার, যা দিয়ে array বা object-এর ভেতরের মান আলাদা ভ্যারিয়েবলে খুব সহজে বের করে নেয়া যায়।
#### 5) Explain template literals in ES6. How are they different from string concatenation?
## template literals হলো আরও সহজ ও ডাইনামিক স্টিং তৈরী করার জন্য ES6 এর একটি পদ্ধতি। এই পদ্ধতিতে সরাসরি একাধিক লাইনে স্টিং ডিক্লেয়ার করা যায়, স্টিং এর মধ্যে ভেরিয়েবল বা এক্সপ্রেশন যোগ করা যায়।
