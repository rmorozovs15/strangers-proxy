Coda Appwrite - Loon plugin package

FILES
  CodaAppwrite.lpx - Loon plugin configuration
  cooda.js         - response script for the profile/user endpoint
  test.js          - response script for the activation endpoint

INSTALLATION
1. In Loon, import the two JavaScript files into Local Scripts. Keep
   their filenames exactly cooda.js and test.js.
2. Import CodaAppwrite.lpx as a local Loon plugin and enable it.
3. Enable Loon MITM for appwrite.digitalforestapp.xyz. Install and trust
   the Loon CA certificate through iOS Settings if not already done.
4. Ensure Loon is active and that the app uses the configured endpoint.

NOTE
The .lpx references the two local .js files; a standalone .lpx cannot
embed JavaScript source in Loon's documented script-path syntax.
The package has only undergone syntax checks and has NOT been tested
against the actual application/API. The scripts themselves are the
user-supplied files and have not been modified.

SECURITY
The user-supplied cooda.js contains a fixed email address and a license
key hash. Do not publish this package to a public repository unless
you want those values to become public.
