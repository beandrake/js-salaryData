A small project from a Javascript course I'm taking.

### Description
This web app should allow users to choose specific roles and companies in the tech industry to see the following information:

 -   The salary for the chosen role at the chosen company.
 -   The industry average for the chosen role.
 -   The average salary at the chosen company across all roles.
 -   The industry average salary across all roles and all companies.

Much of the user interface has already been designed by front-end developers, however, the core data and functionality are either missing or need to be connected together using modules. 

### Learnings
While the purpose of this exercise was simply to increase my understanding of how modules connect via imports and exports, by happenstance I learned so much more!

Normally these exercises are completed within the course's online sandbox, but the instant the course started using multiple files I wanted to get it all running on my local machine.  I've found that there are always one or two interesting hurdles to getting a new technology working for the first time on a machine, so I wanted to get that experience ASAP; only then would I feel like I could confidently *run* Javascript in addition to *writing* it.

And what an interesting adventure that sent me on!  I immediately ran into problems, which encouraged me to learn more about how to debug with the Inspect functionality of browsers; after iterating past some red herrings, I eventually discovered the real problem, which was a thankfully well-documented error: CORS (Cross-Origin Resource Sharing).  In short, to mitigate the chance that malicious code downloaded from the web accesses things on your device that it shouldn't, many browsers now treat local files as having an "opaque origin", which prevents even local files from loading them.  That means if you just double-click your index.html on your device, Javascript imports and exports are going to be blocked by a CORS error.

One of the safer solutions was to set up a local test server; I downloaded a VSCode extension that can do this, but I've also been using Python 3 to host the server by running the following line from the folder containing my HTML:
`python -m http.server`

We'll see which one feels more beneficial over time.

I found this resource to be very helpful in going over a variety of options, including the ones I'm currently using: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server