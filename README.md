# Archived

This project is no longer maintained. A lot of the mapping apps have started to add features similar to Should I Leave Yet. Also, a lot of the mapping APIs have become more restrictive making them a challenge to use for an open source project like this.

# Should I Leave Yet?

This project is for a website that notifies you once your commute time drops
below a certain threshold.

Visit the live website [here](http://www.should-i-leave-yet.com).

# Overview

Traffic is conditions are irregular where I live. So, prior to leaving work I
check the expected commute with traffic. If the commute is longer than I'm
willing to bear, I'll continue working and check again later. If traffic is
particularly bad, this checking and re-checking gets annoying.

This project aims to reduce the amount of checking and automatically send a
desktop notification once the travel time is less than your threshold.

# Details

This project is a "web app" based on Angular CLI and Bootstrap 4. The project is
developed using the WebStorm IDE. Bing Maps V8 Web Control is used for the
mapping and directions services.

The website is meant for desktop only. I presume it could be adapted to work on
mobile, but I believe a native app might work better for this purpose.

# Building

Perform the following steps to build the distribution files. The files are
generated in `/dist`.

1. `ng build --prod --base-href http://www.should-i-leave-yet.com/`
2. Delete the automatically generated `3rdpartylicenses.txt` file from the `dist`
   folder. The tool seems to miss required licenses.
3. Review the manually generated `3rd-party-licenses.txt` for errors. Make sure
   to add any new libraries.
4. If the `3rd-party-licenses.txt` file is void of any errors, copy it into the
   `dist` folder.

# Contributions

TypeScript and JavaScript aren't my primary languages. In fact, my expertise
lies as a hardware engineer. Please contribute if you see anything that looks
funny or needs improving. Also, I don't have access to any Apple products, so I
have no way of testing on them.
