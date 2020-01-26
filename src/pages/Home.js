import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

function Home() {
    return (
        <div>
            <Navbar />
            <Player />
        </div>
    )
}

export default withAuth(Home)

