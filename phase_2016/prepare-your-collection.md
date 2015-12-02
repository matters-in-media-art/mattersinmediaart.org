---
layout: default
title: Prepare your collection
---


# Pre-ingest Procedures
Add intro text here that is applicable to all sorts of institutions ie high level pre-ingest

# MoMA
99.9% of the time, digital collections materials are delivered to Media Conservation on some sort of removable media carrier – such as a portable external hard drive, thumb drive, CD-R or DVD-R. The retrieval of collections materials from these carriers is a critical and important step in the preservation lifecycle of the digital collections materials, as it presents the risk for corruption, accidental deletion, or modification. As such, great measures are taken to ensure that this process is carried out in a manner that prevents any of these problems from happening. Since a very specific combination of hardware and software is used to accomplish this, a small area in Media Conservation's lab has been dedicated to this task.

Pre-ingest Capture Workflow
Media Conservation is in the process of acquiring and installing a dedicated pre-ingest workstation. This workflow will be revised at that point, and this procedure should be considered an interim procedure.

For all hard drives containing collections materials:
connect appropriate write-blocker to ingest workstation computer do not turn on writeblocker yet
If hard drive is an external drive and requires it’s own power supply, plug in the power supply to the external hard drive
connect hard drive to write-blocker
turn on write blocker
if hard drive has it’s own power switch, turn it on
using Finder, explore the contents of the hard drive
assess if any TMS components need to be created for the digital file(s) you are transferring. If so, take care of component creation before proceeding.
Proceed only after components are created in TMS for the digital file(s) you wish to transfer
Create a temporary working directory locally on your workstation. Name it according to the DRMC artwork folder naming convention (lname_fname---title_of_work---objectNumber---objectID). This Python script will provide you with the proper formatting for an artwork directory: https://github.com/finoradin/moma-utils/blob/master/namer.py
Inside this temporary working directory, create sub-directories for each digital component you will be transferring. Name these sub-directories with their respective component numbers.
Using BagIt, we will now copy each of the files/components from the source media to their respective destination directories, and then convert that destination directory into a Bag. Use the following command: bag create [destination] [source file] --payloadmanifestalgorithm sha512 --verbose ; The "destination" is the appropriate component subdirectory. The "source file" is the file you wish to place in the directory/bag. If you have multiple files that need to go in one component subdirectory, you can accomplish this by simply including all of those files in one command: bag create [destionation] [file1] [file2] [file3] --payloadmanifestalgorithm sha512 --verbose ; note that the file paths should be absolute. They are space separated.
If your workstation is not already connected to the DRMC network share, do so now.
If you have more work to do (i.e. there are more materials you need to get off delivery carriers), and you are not ready to go straight to Archivematica ingest, drag and drop your working directory from step 9 to the following directory: /Collections_materials/pre-ingest_staging/
If
A script will be run periodically that updates the component sub-directory names with a fuller naming convention. If there is already an artwork directory, drag and drop the component subdirectories/bags you made in step 10 into the existing artwork directory.
You may optionally validate your bags (however, bags will be validated during ingest) with the following command: bag verifyvalid [absolute path to bag on DRMC] --verbose


Pre-ingest Staging Area
Until late 2014, the DRMC was essentially no more than a network share hosted by the VNX5500. As the DRMC Archivematica/AtoM system was implemented, this network share became the host of the Archivematica AIP store, as well as being used as the staging area for materials ready for ingest.


At present, there are five essential directories at the root of the DRMC file share:

archivematica_dev_AIPStore
archivematicaAIPStore
Collections_materials
Supporting_technologies
To_Be_Assessed


archivematica_dev_AIPStore is the AIP store for the DRMC development environment
archivematicaAIPStore is the actual DRMC AIP store
Collections_materials
    > Artwork_level_backlog contains a backlog of 386 works that need research / attention and component level arrangement / cataloging.
    > pre-ingest_staging is very important. This is where new materials arranged at the component level are placed. Only put things here that are arranged at the component level. Name component sub-dirs with component numbers. The "component subdir renamer" script can be run periodically, which will rename any component subdirs in any artwork folders, giving them the full naming convention of "component_number---componentID---objectID".
    > ready_for_ingest this is where things go when (and only when) they have been arranged at the component level, and the component sub-dirs have the full naming convention.
Supporting_technologies this is where supporting technologies (i.e. operating systems, codecs, etc) are being stored for the time being.
To_Be_Assessed this is where a backlog of unaccounted for materials lives. Some of these materials are not collections materials or need research and cataloging / arranged. The goal is for this to eventually be empty.

# SFMOMA
Incoming media
Digital works of art enter SFMOMA’s collection on various ways, be it a hand-delivered thumb drive, a file sent via file share, or -as it is most often the case- sent via FedEx to our registrars’ attention. This physical medium is then tracked in our database.
Registration informs the media conservator of the arrival and the hard drive gets placed in the white media cabinet, next to the conservator’s workstation (location tracked in Embark). There it is in queue awaiting upload to the temporary RAID-5 storage.

Temporary storage
As a first step to securing the media on the drive, the hard drive content gets bagged and transferred onto a RAID-5. This in-between step prior to uploading the files onto SFMOMA’s digital art server was established to serve two core necessities in managing the files: 
1) to immediately create a higher level of redundancy and 2) to enable a fast connection to handle, replay and quality-control the video files. This temporary storage additionally gives some time buffer in attending to the files for conservators and registrars.

Assessment of files
The media registrar and the media conservator meet once a week for two hours to assess, quality control and upload files to the digital art server. An initial assessment looks at the content of the hard drive and identifies the components (master file, exhibition copy, viewing copy, press images etc.) which later helps to create database entries.
After identifying the master file(s), both the media registrar and the conservator watch the whole video and fill out a corresponding data sheet that addresses technical metadata, content, provenance, and condition. This data sheet gets saved with the file on a file level and also uploaded into the database on the master file’s entry.

Preparing for ingest
After the quality control process, the file gets renamed to SFMOMA’s in-house file naming system and the bag gets updated. 
The media registrar updates the database record and adds components as discussed with the media conservator.

Ingest and LTO-5 backup
After updating the bag, the artwork folder gets uploaded to SFMOMA’s digital art server. An additional copy onto LTO-5 tape is made. This LTO-5 tape gets shipped off-site to Iron Mountain.

# Tate
This is copied directly from the scenarios developed for the PERICLES project. Patricia to look at this and check if anything needs to be corrected or can be expanded upon. - AH

Step
Detailed description of the scenario
Actor/System
Non-technical issues
1
Discussion with artist/gallery about what media is supplied and how it should be played back and how it was created (production history and viewing diagram). Check that artist has viewed the work on a properly calibrated monitor. 
Conservator, artist and/or their rep
Best practice guidelines (checksum, representation information/ player which renders the files correctly)
2
Gallery prepares the work for transfer, and provides basic metadata, checksum MD5 at file level and file size. (Dependent on competencies of supplier)
artist or their rep

3
Create component records in TMS 
conservator, TMS
Policy definition needed for component
4
Media is received at Tate in a hard-drive. The drive includes:
4x MASTER FILES (e.g.10-bit uncompressed.mov files ) - AIP
4x EXHIBITION FORMATS (e.g. mpeg2 files) - AIP
Installation Instructions in a PDF document
Basic metadata and checksum information (MD5) at file level 
(configuration record management)
Registrar and conservator

4.1
Hard-drive is connected to computer and the following processes are run. (We want to know what is in the hard-drive, all the metadata already available within the files)
conservator

4.2
If checksums were not provided from the gallery, generate check-sums (MD5) for the individual files in the hard-drive. (Text file within the hard drive - move copy to T Drive)   


conservator

4.3
Copy files onto interim backed-up storage as soon as possible after arrival. Create a folder per component and then name it with the accession number and the component number 
conservator

4.4
Checksums compared between target and source (ie a tool which compares checksums on source and target would mean that we would not need to record the checksum information). Automate, report back upload successful only if the checksums match. 
conservator plus tool

4.5
Check the files (quality assessment tools and visual check) Files are automatically checked for any digital errors. What type of errors can be identified with an error check?  
http://www.avpreserve.com/dvanalyzer/what-does-it-analyze/ Files are checked visually and approved (can there be tools that help this process?)- if no good then we can make that component inactive on TMS and then request a new component from the gallery and start the process again from 1 to 4.6 (also need to issue request to Arkivuum to delete original component once a new one has been delivered and checked). 
conservator, digital preservation manager, artist and/or their rep

4.6
Extract representation information metadata about dependencies on players etc. 


5
Identify and retrieve the components for ingest from the interim storage - get a list from TMS as to the components needed for ingest
conservator plus tool

6
Pull files out to Archivematica processing area (check sum compare) and then ingest via archivematica. Server at the store or at Tate Britain.
conservator

7
Preservation platform will create a SIP and bag for each of the Artist supplied components (the Artist-Supplied Master or ASM). No Compression. 
conservator and preservation platform

# Assessment
Assessing your video files is a crucial step when they enter your collection. Not only will it help you to understand what codecs and formats you’re dealing with, but also it is necessary to identify possible errors or inaccuracies within the digital video, like encoding glitches, wrong aspect ratios, or generally a codec used that does not fit your preservation policy.

When conducting this assessment, it is helpful to work with a Condition Report which will walk you through all the steps. This could either be a PDF form or a sheet incorporated in your database. An example template can be downloaded here.

In this section you will find five components of an assessment workflow:
Assessment Documentation 
Initial Diagnostics 
Technical Assessment
Visual and Aural Assessment 

Some people will carry out all assessment before ingest into a digital repository, others will choose to ingest the material provided by the artist into their repository and then carry out a full assessment. 

# Assessment Workstation
Introduction
To assess, quality-control and condition report your digital video files, you might want to consider designing a workstation that is customized to your needs and dedicated to these video evaluating activities. Below you will find three examples of workstations that serve various budgets and are aimed at different levels of quality-control. The three tiers outlined are designed to serve both standard definition and high definition video systems. If you are working exclusively with either SD or HD material, different, more customized, and maybe even more economic solutions can be found.

Before going into specific equipment, we are going to describe a few standard features that are applicable to all examples. 

Connection Types
Since the signal connections of your devices will play an important role in the playback of your video files, we’ll briefly describe what’s out there and which one to best use. It is important to note that many analog formats only offer 1 signal type or ascribed to the tape using a certain type of signal and thus outputting them on a “better” signal type can actually change the authenticity of the signal. 

Composite Video [analog connection, SD]: All the information that composes the signal, luminance, chrominance, blanking and synchronization (CVBS), is merged together into one signal. Composite video is a single connection type (either BnC or RCA). Analog formats that utilize a composite signal output and are recorded using a composite signal are ½” open-reel, ¾” U-matic and VHS. 

S-Video or Y/C [analog connection, SD]: As opposed to the composite signal, S-Video separates the luminance (Y) and the chrominance (C) into two different channels. Thereby it is a step up in quality from the composite video. It is transmitted by a distinctive looking, 4 pin plug. Formats that allowed for Y/C.

Component Video [analog connection, SD]: Component video is the best quality connection to transmit analog video signals. The signal is separated into three channels: Y (luminance), Pb (Blue minus L) and Pr (Red minus L). The green is derived using the pythagoreon theorem. Component video comes as three adjoined plugs, sometimes color-coded to green (Y), blue (Pb) and red (Pr). This connection should be used on analog Betacam and Betacam SP.

Serial Digital Interface [SDI, SD or HD]. The SDI signal is a digital bit stream that is either used to transmit analog and digital video signals as well as used by many digital formats to record the signal to tape (Digibeta). SD-SDI is a signal connection type, using the BnC connection type, that packages the video, aural and any ancillary data (timecode, closed captioning, etc) into a signal bit stream for transmission. SD SDI is a 4:2:2 YUV system of video transmission. HD-SDI uses the same principal but splits the signal amongst multiple connections to increase the bandwidth necessary for transmission of High Definition material. 

High Definition Multimedia Interface [HDMI]: HDMI is typically used in the connection of monitors and other devices together in the transmission of high definition material. 


Monitor
For standard definition video files –for example videos that come from SD tape transfers–, watching the video on a CRT monitor is crucial, as only these monitors will show you both fields of the interlaced content and provide you an authentic display of the video signal. Since CRT monitors are not fabricated anymore today, you’ll most likely have to scout appropriate web platforms (eg. eBay) or watch for a garage sale of a nearby Broadcast studio getting rid of their equipment. Make sure the video inputs fit your system before you buy it, and have it calibrated for best use.

Viewing interlaced video files on a computer monitor is problematic in the fact that these monitors cannot display interlaced footage and will attempt to merge the fields together into discrete frames. Certain errors, e.g. a head clog from a tape digitization, can only affect one field and lead to complete image loss, which you wouldn’t even see on a computer monitor.

With high definition video, the term progressive entered the video world. Progressive means that a video –just like film– contains of full frames, as opposed to the two-field interlacing technique. This is often indicated by a lower case p, like 720p. These videos can be quality-controlled easily on a computer monitor. A more advanced approach for viewing these kinds of files would be a color-calibrated, LCD studio monitor.


Computer
Watching digital videos, especially compressed ones, can be challenging for older or regular “desktop”-computers. For your workstation you would want quite a powerful computer, with at least several GB of RAM. Most videos will lag, if you play them off of external hard drives, depending on your interface, or off of servers, depending on your connection; it is thereby often necessary to save them locally, which requires enough storage space on your computer. Alternatively you could consider an external hard drive or RAID with a fast enough interface connection. The platform you choose –Mac or PC– depends on the kind of software you’d like to use: Final Cut Pro only works on Macs, whereas Adobe Premiere is available for both platforms. Make sure to choose your computer platform depending on your software and hardware needs and compatibilities.

A/D converter 
An Analog to Digital converter is necessary to process both standard definition material from your computer to a CRT monitor as well as provides connection types for connecting external HD monitors and scopes. 

Scopes
Monitors that display visual information, even when calibrated, are inherently subjective in how they represent the visual information. If someone were color blind, the assessment of color information would be inaccurate by using the visual signal only. Oscilloscopes provide a view of the signal in an object manner by providing access to the luminance and chrominance electronic information. The two critical scopes for the assessment of both analog and digital video are a waveform monitor and a vectorscope. 

Waveform Monitor: [IMAGE]The waveform monitor allows you to measure the luminance (black and white) information of the video signal. A graticule is used to plot the information on a scale and allows one to see whether the black are too low in the signal (which may disrupt sync in an analog system) or the whites are two high (which would allow visual confirmation that the whites are “blown out” or exceed 100 IRE). 

Vectorscope: [IMAGE]The vectorscope is a 360 degree color wheel that allows one to measure the hue and saturation of the chrominance information in the video signal. Known references like fleshtone, blue sky, etc can be used to see whether the chrominance information is being represented faithfully or may warrant re-transfer or processing done by a processing amplifier. 

Software
Software is crucial in the assessment of your digital video material. It’s important to understand the basics of what the software is doing to know whether your video is being processed and faithfully represented. Typically, capture and editing software like Blackmagic’s Media Express, Adobe Premiere and Final Cut Pro X can be used to analyze the discrete portions of your video material and allows for an in-depth assessment of its basic characteristics (luminance, chrominance and audio). 

Audio 
[IMAGE OF MONITORS AND METERS]
Quality audio monitors and meters are also necessary in the assessment of video material. A pair of studio grade, near-field speakers is recommended for close listening to a piece. In addition, audio scopes using either the db or vu method of measurement are useful in looking at whether the audio is clipped, compressed or otherwise distorted as well as measuring whether the audio is in phase or not. 

Tier 1 
CRT monitor with SDI video input
A/D video card
Computer
Video Editing Software
Video playback software
Assessment Software
Example of Tier one Setup:
 

Tier 2
CRT monitor with composite and SDI input
A/D video card
Computer
Analog Waveform Monitor/Vector Scope
Audio Monitors
Audio Meter
Video Editing Software
Video playback software
Assessment Software
Example of Tier 2 Setup: 



Tier 3
CRT Monitor with composite, component and SDI input
A/D video card
Computer 
Analog Waveform Monitor/Vectorscope
Digital Waveform Monitor/Vectorscope
Sync Generator with Colorbars/1Khz tone
Audio Monitors
Audio Meter
Video Editing Software
Video playback software
Assessment Software
Example of Tier 3 Setup:

# Initial Diagnostics
The amount of technical information that you might receive with a digital video artwork will vary depending on how technical the artist is or how good their technical support is. 

Before you can properly assess the digital video files either in your collection or during the acquisition process, you first need to have a better understanding of the environment, ie. the software and hardware system used for production and playback, and the way the video was produced. This information will help inform both the accurate assessment of the video material as well as how to best care for it in the future. 

File Characteristics 
These are the key characteristics of the file that you will want to have prior to receiving the video elements for acquisition:

File Characteristics: 
What is the file wrapper? e.g. mov, mp4, avi, etc. 
What is your codec? e.g Apple Pro Res 4:2:2, Uncompressed, H.264
What is the video resolution? e.g 1080 x 1920, 480 X 720, 576 X 720, etc. 
What is the aspect ratio? 16:9, 4:3, etc.  
What is the chroma subsampling?: e.g. 422, 4444, etc. 
Is the file interlaced or progressive? 
What is the audio codec? e.g. PCM, AAC, etc. 
What file format(s) have you used for exhibition? e.g same as above, h264
What is the audio? e.g mono, stereo, surround 5.1 



Where possible, to facilitate the accurate delivery of this information, ideally the artist or their representative would do the following: 

FOR MACS: 
Open VLC and playback your video. 
Go to Window>Media Information
Select second tab: “Codec Details”
Expand All Streams 
It should look like the image below. 


FOR WINDOWS:
Open VLC and playback your video. 
Go to Tools>Media Information
Select third tab: “Codec”
Expand All Streams 
It should look like the image below. 

[INSERT SCREEN SHOT]

You should  then advise the artist or representative to view the file in VLC and confirm that the above characteristics are present and the file looks accurate. 
Environment Characteristics 
Having information about the environment of creation (i.e. the software and hardware used) can be useful in confirming assessment and/or diagnosing errors. 

How was the work edited? e.g Final Cut Pro 7.0.7, Adobe Premiere Pro CC
 If possible, could you provide your project file or XML output of it? 
What playback environment did you use when viewing your piece? e.g. Mac Pro running OS X 10.9, PC Tower running Windows 8, etc. 
What software do you typically use when checking/viewing your files? e.g. Quicktime 7, Quicktime X, VLC, etc. 

Display Characteristics 
As with any time-based media artwork, it is useful at this stage to understand any display specifications, for more information see http://www.tate.org.uk/about/projects/matters-media-art/acquisitions/pre-acquisitions/ 

At this stage it is useful to understand the artist’s attitude to changes in the appearance of their video artwork over time. For example, changes in display technology (LCD projectors vs DLP projectors, changes in playback devices), color shifts, etc.  

For digital video artworks in particular, this information can prove critical in quantifying the changes that can occur to a file through various playback and display technologies. For example, a particular combination of stream(s) and wrapper may not provide unambiguous instructions for decoding leaving the possibility that different players might play back the video stream differently.

It is helpful to ask if the artist or their representative have experienced any problems with achieving a suitable level of consistent playback for this work, if so please ask them to describe. 

# Technical Assessment
TECHNICAL ASSESSMENT
Depending on your workflow you may carry out a technical assessment before you process your content for ingest into a digital repository or after. 

The purpose of this assessment is to expose, document the following characteristics and ensure that they remain unchanged by any processing carried out. 
Aspect Ratio
Pixel format
Colour matrices and spaces
Frame size
Interlacement
YUV sample range
Timecode
Frame Rate
Duration
Audio Channel Arrangement (channel count, assignment)
subtitles


Assessing the files: 
There are four main things to analyse the technical metadata of your files for:
confirming that the content is as expected 
that there are no obvious technical problems with the streams
that there is no conflicting information between the streams and the wrapper
that this is not an of absence of key information in the streams and the wrapper 

To begin the technical assessment of your video files, you first need to run mediainfo on your file(s) to expose the technical metadata for analysis. To do this, follow the below instructions: 

MAC: 
Open Terminal
run media info on the video files you are about to assess 
command: mediainfo -f [path to input file] 

It will look something like this: 


On PC: 
open 
run mediainfo with the following command
it will look something like this: 

Confirm that the basic content is as expected, for example the codec, the wrapper, audio sample rate and bit-depth, subsampling, frame rate and the duration


Confirmation of Content
 This step in the technical assessment of your video files is to confirm the files you have received match what was expected from the artist or their representative. 


Identifying Obvious Technical Problems
 
This step is to confirm that the files integrity is intact and there are no obvious signs that the file is incomplete or corrupted. The first method of checking the integrity of the file is to confirm that the file checksum associated with the file validates when transferred or moved to your storage infrastructure. If the checksum does not validate, this is a clear sign that something technically has changed within the file. The second method of checking the file integrity to to analyze the mediainfo report for clear indicators of technical problems. These can vary, but an example is a file that will not open and the mediainfo report looks like the image below: 
 

By analyzing this report, it becomes clear that the file is incomplete and lacks the video and audio streams necessary for playback as mediainfo report finishes without displaying the video or audio stream technical metadata. This makes it clear that this information is not present in the file and is the reason for its inability to be displayed. This is a critical error with the file and will necessitate replacement. 


Identifying Technical Conflicts in Wrapper versus Streams
Problems might arise in the consistent playback of a video stream with regards to aspect ratio and colour interpretation if there is conflicting metadata held in the wrapper and the stream. 


Video
ID/String                                : 1
Format                                   : AVC
Format/Info                              : Advanced Video Codec
Format_Profile                           : Main@L4.0
Format_Settings_CABAC/String             : No
Format_Settings_RefFrames/String         : 2 frames
Format_Settings_GOP                      : M=1, N=50
CodecID                                  : avc1
CodecID/Info                             : Advanced Video Coding
Duration/String                          : 2mn 57s
BitRate/String                           : 4 925 Kbps
Width/String                             : 1 920 pixels
Height/String                            : 1 080 pixels
DisplayAspectRatio/String                : 16:9
FrameRate_Mode/String                    : Constant
FrameRate/String                         : 25.000 fps
ColorSpace                               : YUV
ChromaSubsampling                        : 4:2:0
BitDepth/String                          : 8 bits
ScanType/String                          : Progressive
Bits-(Pixel*Frame)                       : 0.095
StreamSize/String                        : 104 MiB (98%)
Language/String                          : English
Encoded_Date                             : UTC 2014-03-27 11:47:51
Tagged_Date                              : UTC 2014-03-27 11:55:51
colour_primaries                         : BT.709
transfer_characteristics                 : BT.709
matrix_coefficients                      : BT.601
colour_range                             : Limited


In this example, the 3 fields to look at are “color primaries”, “transfer_characteristics” and “matrix_coefficients”. There is a conflict in the subsampling between the “color primaries” and the “matrix_coefficient” where the file contains decoding information that relates to 2 very different color spaces. This conflict would expose itself if played back in Quicktime where the player would default to BT.601, which is the incorrect colorspace. 


Identifying Absence of Key Information 
avi/ uncompressed problem 
aspect ratio information - not captured in ffv1 and mkv 

visual check :
choppy - field dominance issues
Poor quality or accuracy of colour data - chroma subsampling upscaling issues 

Things to document to make sure you display it properly:
full range and broadcast range
resolution and interpolation 
Display Aspect Ratio (DAR) 

# Visual and Aural Assessment
- Critical Visual Assessment Characteristics 
    - Colorspace and Gamma
    - Luminance
    - Chrominance

- Tools to use for Assessment
    - reference monitor (SD vs HD)
    - waveform/vectorscope

- Critical Aural Assessment Characteristics
    - Levels (db vs VU)
    - Phase
   
- Tools to use for Assessment
    - Meters (Digital)
    - Phase oscilloscope 
    - Monitors 
    - Waveform Visualization 

Visual and Aural Artifacts
    - Analog "burned-in" artifacts
    - digital artifacts
    - Identifying cause/origin
    - A/V Artifact atlas

# Assessment Documentation

# Catalogue
Depending on the scale of your collection and your systems you may decide to keep information about the artwork (for example installation instructions, acquisition details, exhibition history, documentation, conservation records, artist interviews, rights and contracts) in your repository alongside your digital video file. For larger institutions who have collections management systems which manage a complete collection, including non digital objects, there will be conventions for records management. In this situation the risks of developing a unique system of records management for digital objects may be greater than conforming to an institutional wide policy. Example risks in this situation are siloing your digital video collection, creating a situation where integration is difficult, falling outside standard upgrades of databases etc. However, if you manage a small collection and you do not have a robust collection management system that is fully supported it may represent a lower risk to store information about the artwork and its history alongside the digital video file.  

Whichever solution you chose it is essential that you can access the information held within the repository and relate it to any records held outside the repository. For example, you can store information about the artwork in your records management system while the digital file is kept in a digital repository. 

Every artwork should have a unique ID that can be identified across systems. Most collections have a system of assigning accession numbers, for example at MoMA 45.2014 would be a unique number which refers to the 45th work acquired in 2014. For Tate T01234 is simply a unique number assigned at acquisition. These accession numbers may also be underpinned by alternate numbers which allow for a persistent link between the artwork and its associated information. 

Many artworks have associated with them a number of components. For digital video these may be different exhibition formats, access copies or archival formats. A digital video artwork may also be made up of multiple channels of video with a discrete file for each channel. It is useful to create component numbers for these items for example 45.2014.x1, 45.2014.x2, 45.2014.x3, etc.  or T01234.01, T01234.02 etc. 

Examples:
Tier 1 (individual or small collection) 
 - All material is collected and stored alongside the digital video file in a single directory which is given the unique ID as its title. For example: 
  [screen shot of material in one directory]

Tier 2 (small to medium sized collection)
All material is collected alongside the digital video file in a single directory using the unique ID as its title. This unique ID will also be used to link information about the artwork in any other systems used. For example, a database or a filing system. 

Tier 3 (large collection) 
Digital video file is stored by itself in a directory structure that uses the unique ID as an identifier for later ingest into a digital repository. Information about the artwork is stored in a directory structure that also conforms to the unique ID naming convention but is accessible across departments leveraging the institutions records management systems. 

# Collection Management
Cataloguing Your Collection

Assessing your collection in conjunction with Scoping Your Context means that you will be gathering a lot of information about your digital video works. This critical information needs to be held in central and searchable system. Museums use collection management systems (link to section below). Many of these were not designed with media works in mind, yet they can be adapted or added to in order to capture essential information about digital video works. For examples of how this has been achieved by the project partner museums please refer to the following documents (link to documents). If you are not a museum a simple system can be implemented, it could simply be an excel file.


A Brief Introduction to Collections Management Systems - DRAFT
A collections management system is a software database with the purpose of fulfilling the needs of museums and other institutions to manage the information about objects in their collection.

The first exploration of information management in museums began in 1968 as a collaboration between the Metropolitan Museum of Art and IBM at the first U.S. Conference on Museum Computing1. Since this time information systems in the museum have advanced in complexity and have provided new insights into how an institution collects data around its collection, collaborates internally, shares the information with other institutions and the wider public.

The goal of the collections management system is that it should meet the mission of the collector or collecting institution’s mission and serve the long-term sustainability of the collection in tandem with various systems that are described in this section, Developing Your Systems.

The Collections Management System Contains data about the objects in the collection including:

-Cataloging
-Location and tracking location history
- Acquisitions
-Deaccessions
-Loans
-Condition and conservation reports
-Security
-Copyright

Within libraries, archives, and museums there are many CMS systems available for use, including: The Museum System (TMS), EmbARK, Archivists Toolkit, Filemaker Pro, and Microsoft Office Access, just to name a few. Some institutions even create their own "homegrown" CMS to address the specific needs of their collection.

https://drive.google.com/?tab=oo&authuser=1#folders/0B7Z8C5ObyFHmakhkUkJLN19GaTg
Tools:
http://www.collectionstrust.org.uk/choose-a-cms
http://www.keepthinking.it/qi
1. http://www.historyofinformation.com/expanded.php?id=1725

