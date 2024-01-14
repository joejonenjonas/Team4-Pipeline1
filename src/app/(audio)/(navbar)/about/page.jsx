"use client";
import React from "react";
import { redirect } from 'next/navigation';
import { UserAuth } from "../../../context/AuthContext";

const page = () => {
  const { user } = UserAuth();

  //if (!user) {
    //redirect('/login');
   // }
  return (
    <div className="w-full flex items-center justify-center h-screen p-8 text-slate-700">
      <div className="flex flex-col gap-16 w-4/5">
        <div className="flex flex-col gap-4">
          <p className="text-5xl font-black">About the project</p>
          <div className="bg-slate-200 rounded-lg p-4 text-slate-900">
            <p>
              Ons karaokeplatform biedt een meeslepende muziekervaring met de
              mogelijkheid om nummers te beluisteren en tegelijkertijd de lyrics
              te zien. Gebruikers kunnen gepersonaliseerde playlists
              samenstellen, hun favoriete songs markeren, en ontdekken hoe vaak
              een nummer is afgespeeld. Met een gebruiksvriendelijke interface
              stelt ons platform muziekliefhebbers in staat om hun zangtalent te
              verkennen terwijl ze genieten van een uitgebreide bibliotheek. Of
              je nu wilt ontspannen met geliefde deuntjes of nieuwe hits wilt
              ontdekken, ons karaokeplatform biedt een veelzijdige en boeiende
              muziekervaring voor iedereen.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-5xl font-black">About the team</p>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid-cols-5 bg-slate-200 text-slate-900 rounded-lg grid gap-4">
              <div className="col-span-2">
                <img
                  className="grayscale rounded-l-lg"
                  src="https://avatars.githubusercontent.com/u/61149527"
                ></img>
              </div>
              <div className="flex items-center col-span-3">
                <p className="">
                  Als frontend-developer heb ik me voornamelijk gericht op het
                  ontwerpen van de parser voor het extraheren van songteksten en
                  het stylen van de website. Mijn rol omvatte het optimaliseren
                  van de gebruikerservaring door nauwkeurige lyricweergave en
                  een aantrekkelijke visuele presentatie.
                </p>
              </div>
            </div>
            <div className="grid-cols-5 bg-slate-200 text-slate-900 rounded-lg grid gap-4">
              <div className="col-span-2">
                <img
                  className="grayscale rounded-l-lg"
                  src="https://avatars.githubusercontent.com/u/85442431"
                ></img>
              </div>
              <div className="flex items-center col-span-3">
                <p className="">
                  Als backend-developer heb ik cruciale aspecten van ons
                  platform vormgegeven. Mijn focus lag op het opzetten van een
                  efficiënte databasecommunicatie, het genereren van
                  LRC-bestanden en het implementeren van de
                  playlist-functionaliteit voor een naadloze gebruikerservaring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
