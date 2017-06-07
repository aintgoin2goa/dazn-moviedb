# dazn-moviedb

This project uses `Make`.  If you're on windows you might find it easier to copy and paste the relavant bits of the makefile
into your terminal.

To run this app you will need a `.env` file in the root with MOVIE_DB_API_KEY=XXXXXX in it.  Replace the X's with your API key

Once you have that run `make install` to get all the dependencies, `make build` to transpile, combine the client-side code and `make run` to run the app.

You can run the tests using `make test`.  There are also an integration test which you can run with `make int-test`

Or, if you're into the whole brevity thing just run `make install build run` to get going.
