E-Learning Platform – Μέρος Β (MEAN Stack)

Η παρούσα εργασία αφορά την υλοποίηση μιας υπηρεσίας ηλεκτρονικής μάθησης (e-learning) για μαθήματα Πληροφορικής.

Η εφαρμογή επιτρέπει στον χρήστη να:
περιηγείται σε μαθήματα οργανωμένα ανά κατηγορία
βλέπει αναλυτικές πληροφορίες για κάθε μάθημα
περιηγείται σε βιβλία και εκπαιδευτικά βίντεο
εγγράφεται στην πλατφόρμα μέσω φόρμας χρήστη

Το έργο υλοποιήθηκε σε δύο μέρη:

-Μέρος Α: frontend ιστότοπος (HTML, CSS, JavaScript)

-Μέρος Β: πλήρης client–server εφαρμογή βασισμένη στην αρχιτεκτονική MEAN

- Αρχιτεκτονική (MEAN)

Η εφαρμογή ακολουθεί αρχιτεκτονική client–server:

Backend:

Node.js, Express, MongoDB, Mongoose, REST API

Ο server:
διαχειρίζεται τα δεδομένα (μαθήματα, βιβλία, βίντεο, χρήστες)
εκθέτει REST endpoints
δεν περιέχει καθόλου HTML

Frontend:

Angular, Vite, HTTP Client

Ο client:
αντλεί όλα τα δεδομένα μέσω API
δεν περιέχει hardcoded δεδομένα
χρησιμοποιεί routing για πλοήγηση (courses, course details κ.λπ.)

Δομή έργου:

part-b-mean/
│
├── server/
│   ├── package.json
│   ├── .env
│   └── src/
│       ├── app.js
│       ├── config/db.js
│       ├── models/
│       ├── controllers/
│       └── routes/
│
├── client/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.ts
│       ├── app/
│       ├── pages/
│       ├── services/
│       └── assets/
│
└── README.md

Οδηγίες Εγκατάστασης & Εκτέλεσης

Για την εκτέλεση της εφαρμογής απαιτούνται:

Node.js
npm
MongoDB 

Εκκίνηση Backend (Server):
Βήμα 1
cd server
Βήμα 2
npm install
Βήμα 3
αρχείο .env:
MONGODB_URI=mongodb://localhost:27017/elearning
PORT=3000
Βήμα 4
npm run dev

Ο server θα τρέχει στο:

http://localhost:3000

Εκκίνηση Frontend (Client):
Βήμα 1
cd client
Βήμα 2
npm install
Βήμα 3
npm start

Ο client θα τρέχει στο:

http://localhost:4200

REST API Endpoints

GET	/api/courses	Λίστα μαθημάτων
GET	/api/courses/:id	Λεπτομέρειες μαθήματος
GET	/api/books	Λίστα βιβλίων
GET	/api/videos	Λίστα βίντεο
POST	/api/users	Εγγραφή χρήστη

Ροή Δεδομένων

Ο χρήστης ανοίγει τη σελίδα στον browser

Ο Angular client ζητά δεδομένα μέσω HTTP

Ο Express server απαντά με JSON

Τα δεδομένα αποθηκεύονται σε MongoDB

Ο client ενημερώνει δυναμικά το UI