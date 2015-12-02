---
layout: default
title: Developing Your Systems
---

This section will offer guidance on developing your own systems based on collection and resources. We’ll look at scenarios of roles and responsibilities, hardware and software infrastructure, documentation models and examine the processes that tie them together. This will serve as a resource guide for designing your preservation system.

# Prepare Your Environment
Add basic intro: (this covers design & build storage, work station)

This section will take you through the steps required to build your preservation system. Covering the basic concepts and requirements of redundancy, fixity and storage we will look at different ways in which this could be achieved, ranging from a simple manual system through to a large automated system, and will be illustrated with real-life examples. In partnership with storage is creating a workstation with ability to play, assess and provide access to with your storage environment.

# Design and Build your Storage
This section outlines the key elements associated with the design and build of reliable storage for long term digital preservation. The content has been arranged to address a range of situations; whether you are an individual who is designing a low risk personal storage solution, through to a large organisation. 

No matter the size of your collection the following concepts need to be built into your storage; multiple copies stationed at different geographical locations, speed and ease of access, redundancy, and fixity. 

These concepts will be introduced and different methods for implementation will be explored through the 3 levels of storage design. Each level will be illustrated with a high level diagram around which the detail is organised.

# Redundancy
The lifetime of a hard-drive varies from three month to five years. If you only have one hard drive and it breaks down, data recovery is very costly, and can be catastrophic. As a rule of thumb: One copy is no copy. Save your data on at least two mediums (e.g. hard drive, server, LTO tape, flash drive, cloud) and in at least two geographic locations.

In the guides provided for planning your storage and backup infrastructure, there are characteristics of types of storage pools. These characteristics are generally dictated by the purpose of any given copy of your data. A duplicate copy of your data may be maintained for high availability, disaster recovery, or recovery from accidental modification or deletion.

Types of copies 
High-availability: A redundant copy of your data maintained for the ability to provide easy access to said data with no downtime in the event of loss of the primary copy. Typically this means an exact duplicate of the primary infrastructure at an offsite location, with an equivalent connection to the outside world or access points. This infrastructure would contain a complete and up to date copy of your entire collection. With high-availability copies of data, ease of access is paramount.
Disaster recovery: When maintaining a copy of data for disaster (for instance, in the event of fire, flood, or earthquake) recovery purposes, the goal is simply to be able to retrieve, rebuild, and access your data. Within reason, ease of access is not a priority. An LTO tape stored off-site is one example of a suitable medium for a disaster recovery backup.

# Fixity

When creating a secure storage environment for your data, you will want to make sure the data itself stays safe and does not change without your knowledge. This process is known as fixity, and is achieved by generating checksums for your files which are monitored by re-checking, on a regular basis.

Checksums are like a “fingerprint” for data. The most commonly used are MD5 and the SHA variety. Simply put, your file is run through a certain algorithm that produces a hexadecimal number sequence. The slightest change to your file will produce a completely different checksum. If you have an automatic monitoring system in place, it would alert you if such a change occurs. With this simple process, it is possible to identify any changes to your files. The types of changes which can be identified with this method are those which indicate corruption, loss of data, or unintended manipulation.

In any workflow it is important to create a checksum before any processing takes place, because handling, copying, and manipulating your files are all occasions where data corruption can occur. Calculate checksums as soon as you’ve received or created a file. This could mean creating checksums on the hard drive you received the artwork, or as you export a file from the hard drive on which an artwork was received, or as soon as you have exported a file from an editing program or on digitized a tape.

Checksum_Workflow.jpg

More advanced systems, like RAID 5 and up, provide data integrity on the block level of your storage system. These systems store your data in blocks of typically 512 bytes in various places (multiple disks) and checksum these blocks which can be comprised of various pieces of data. If one hard drive fails, the system can restore the lost data by using the redundant data block and the checksum. It is, however, only assuring the integrity of your volume and though it would detect any kind of data corruption, it would not alert you, if a file was accidentally deleted or changed by a user.

There are very simple and easy-to-use tools which can perform checksums. One of them is Checksum+[1] (OS X). With this tool you can just select a file and it will create a checksum for you, stored within an .md5 file, in the same location, with the same name as your file. Double-clicking this .md5 file will run a fixity check and tell you, if everything’s ok. If you open it with a text editor, it will show you the MD5 checksum as well as the file it is pointing to. It is important that both the .md5 and the original file are stored in the same folder.

A little more advanced is BagIt, developed by the Library of Congress [<- is this true?], which is used in a command line interface.[2] BagIt was originally created to safely transfer files from one place to another, by packaging the original data in a ‘bag’ (folder) and creating checksums for each file within that bag. It also stores information about the date and software version as text-files within the bag, and creates checksums of all these text-files, including the checksum files themselves.

Both of these programs will not automatically check your checksums this is done manually if using these tools alone. There are also tools for automatically comparing checksums and identifying change (need to say more about this…)

AVPreserve has created a tool, FixityWin, that enables the user to identify seven directories that the program can check automatically on a monthly, weekly or daily basis.[3]

When checking a checksum of a file, the result will indicate if there has been a change or not, it does not, however, indicate where or what or to which degree the file has changed. David Rice, Audiovisual Archivist at CUNY, recommends generating frame-level checksums that can be created within ffmpeg[4].[5] This frame-level approach creates a checksum for each frame of a video, so corruption or change can be tracked and pinned down by the frame.

This is what a check sum looks like: 
There is a debate about whether to checksum each frame or each video file (discuss pros and cons)
Here are some free tools to help….
This is where checksums are carried out in an ingest workflow.
This is when checksums can be carried out in a maintenance cycle.

Summary:

Examples how Fixity you could be implemented and managed within the different storage Levels 1-3.

Level 1
Level 2
Level 3
Manually create and manually check checksums

Automatically create checksums from the very beginning (eg. hard-drive plug-in) and check them automatically on a regular basis.
Notification system in place (eg. email).
Additional frame-level checksums for video files.
=imperfect/deficient, but might work for an overseeable number of files

=really good


[1] Link [http://www.julifos.com/soft/checksum/]
[2] http://en.wikipedia.org/wiki/BagIt 
[3] http://www.avpreserve.com/avpsresources/tools/
[4] https://trac.ffmpeg.org/wiki/framemd5%20Intro%20and%20HowTo
[5] http://dericed.com/papers/reconsidering-the-checksum-for-audiovisual-preservation/ 


# Storage options
In this section we describe three possible storage designs appropriate to three different levels. For a detailed description of these different levels please see ‘Scoping your Context’, however, in simple terms level 1 represents a small collection managed by one person with limited resources, whereas levels 2 and 3 represent increases in size of collection and resources. 

Further to the storage options, the connections to the storage must be considered, as they will be a limiting factor. Large files can take very long to transfer, so it is worth investing in faster connections. It is also important to consider that transferring files over a shared network will impact other users of that network.

## Level 1
Level 1 is designed for individuals (artists, collectors, etc) or small institutions that have a small collection of digital material, in the region of 1-100 titles. Taking into account the limited amount of time and budget that is typical of this type of situation, this level is geared towards the basic steps necessary for providing secure digital storage. This scenario relies on off the shelf products and relatively user-friendly systems for storage to create safe, accessible and easy to accomplish storage. 

Level 1 recommends using a RAID 1 or similar for on-site storage, and manually copying this for first off-site copy, and utilizing paid cloud or p2p storage for the second off-site copy.

PRODUCTION/PRIMARY COPY: ON-SITE

This first copy could be as simple as having a copy on your PC, and or stored on a local external hard drive. An alternative solution could be an external RAID drive. RAID 1 requires no technical knowledge, it comprises of an external hard drive with dual bays (dual drives). When you copy your data to the RAID 1 a copy is saved on each of the bays meaning should one of the 2 bays fail you have a back-up, this is known as redundancy (explanation in introduction to storage). Having two copies at your primary site is a good strategy, in the event of a basic error such as unintended deletion or corruption you have immediate access to your data. 

Technical Options:

What is RAID
Originally redundant array of inexpensive disks; now commonly redundant array of independent disks; is a data storage virtualization technology that combines multiple disk drive components into a logical unit for the purposes of data redundancy and performance improvement.[1]

Data is distributed across the drives in one of several ways, referred to as RAID levels, depending on the specific level of redundancy and performance required. The different schemes or architectures are named by the word RAID followed by a number (e.g. RAID 0, RAID 1). Each scheme provides a different balance between the key goals: reliability and availability, performance and capacity. RAID levels greater than RAID 0 provide protection against unrecoverable (sector) read errors, as well as whole disk failure.

RAID 1
RAID 1 comprises mirroring (without parity or striping). Data are written identically to two (or more) drives, thereby producing a "mirrored set". The read request is serviced by any of the drives containing the requested data. This can improve performance if data is read from the disk with the least seek latency and rotational latency. Conversely, write performance can be degraded because all drives must be updated; thus the write performance is determined by the slowest drive. The array continues to operate as long as at least one drive is functioning.[9]

Following are the key points to remember for RAID level 1.
-Minimum 2 disks.
-Data on drives are mirrored in at least 2 physical locations
-Good performance.

References
http://www.thegeekstuff.com/2010/08/raid-levels-tutorial/
http://www.macworld.com/article/1165692/lacie_2big_thunderbolt_series_6tb_raid_array.html

Costs (based on 2015 prices)
Expect to spend between $500-$1000.00 based on your storage capacity needs, either for an external hard drive or RAID 1.


What is DROBO
DROBO is a proprietary external storage solution for computers, Drobo (formerly known as Data Robotics) allows for flexible growth of storage capacity. It’s design is similar RAID, with the difference being that DROBO is proprietary. It’s “BeyondRAID” technology allows for the volumes to expand without the need for rebuilding your RAID every time new drives are added. DROBO’s higher end model provides not only redundancy of drives, but also for power supplies and fans.


References
Comments
Costs (based 2015 prices)


STORAGE DEVIDE: MANUAL OFF-SITE, OPTION 1

Creating an off-site manual copy could be as simple as saving your data on an external hard drive, or RAID 1 which is stored in A different geographic location. For example work and home, with a family member, friend or alternate work location, just as long as its a different geographic location so that you can recover from a disaster, such as computer drive failure, flood etc. In this case expect to spend the same amount as your primary on-site copy. 

Storage device: Automated Off-site, option 2. Peer-to-Peer File Sharing (P2P)

What is Peer-to-peer (P2P) 
This is a method of distributing files between many computers, which has the benefit of allowing one to circumvent a third party, such as a commercial “cloud” storage service. Often P2P technology is used for the purpose of sharing files, providing the ability to download different bits of a file simultaneously from different peers, which offers a faster download speed than when downloading a file from one provider. However, in this context P2P technology can be used for the automatic synchronization of data across different geographic locations. 

Through the use of special software, one can configure a network of 2 or more computers (nodes) in geographically distributed locations, to keep a set of data synchronized between them. Depending on the level of access and control one has over the nodes of this network, P2P technology can eliminate the need to manually manage copies for off-site redundancy. Some P2P file synchronization tools provide the ability to encrypt offsite copies, which could be desirable if nodes in your P2P network could potentially be accessed by untrusted parties.

References
http://www.onguardonline.gov/p2p
Comments
Costs (based on 2015 prices)


STORAGE DEVICE: AUTOMATED OFF-SITE, OPTION 3. CLOUD STORAGE SERVICE 


Cloud storage is a model of networked enterprise storage where data is stored in virtualized pools of storage which are generally hosted by third parties. Hosting companies operate large data centers, and people who require their data to be hosted buy or lease storage capacity from them. The data center operators, in the background, virtualize the resources according to the requirements of the customer and expose them as storage pools, which the customers can themselves use to store files or data objects. Physically, the resource may span across multiple servers and multiple locations. The safety of the files depends upon the hosting companies, and on the applications that leverage the cloud storage. Cloud storage services may be accessed through a web service application programming interface (API) or by applications that utilize the API, such as cloud desktop storage, a cloud storage gateway or Web-based content management systems. Examples of cloud storage in 2014 include Dropbox and Google Drive, Glacier, Preseriva, and DuraCloud. 

Following are the key points to remember for Cloud Storage Services:.
-Charges on out-bound access can be leveraged based on per- request and per-byte
-Check security policies offered by providers
-???

References
http://www.calctool.org/CALC/prof/computing/transfer_time (calculates data transfer time)

Costs (based on 2015 prices)
There are many personal paid cloud options which can range from $4.00-$10.00/£3.00-£7.00 per month.

## Level 2
Level 2 is designed for medium sized collections of digital material (100 - 500 title) that have a modest budget and staff for the care and maintenance of their collection. This level is geared towards galleries, private collections and small institutions that have (or have the ability to hire) staff and infrastructure to implement and maintain this storage scenario. 

Level 2 recommends using a RAID or similar system for the on-site copy and manually backing up to LTO or disk for first off-site copy and utilizing paid cloud storage or p2p for the second off-site copy.

Storage diagram level 2
Primary copy: on-site 

What is RAID
Originally redundant array of inexpensive disks; now commonly redundant array of independent disks is a data storage virtualization technology that combines multiple disk drive components into a logical unit for the purposes of data redundancy and performance improvement.[1]

Data is distributed across the drives in one of several ways, referred to as RAID levels, depending on the specific level of redundancy and performance required. The different schemes or architectures are named by the word RAID followed by a number (e.g. RAID 0, RAID 1). Each scheme provides a different balance between the key goals: reliability and availability, performance and capacity. RAID levels greater than RAID 0 provide protection against unrecoverable (sector) read errors, as well as whole disk failure. 



RAID 1
RAID 1 comprises mirroring (without parity or striping). Data are written identically to two (or more) drives, thereby producing a "mirrored set". The read request is serviced by any of the drives containing the requested data. This can improve performance if data is read from the disk with the least seek latency and rotational latency. Conversely, write performance can be degraded because all drives must be updated; thus the write performance is determined by the slowest drive. The array continues to operate as long as at least one drive is functioning.

Following are the key points to remember for RAID level 1.
-Minimum 2 disks.
-Data on drives are mirrored in at least 2 physical locations
-Good performance ( no striping. no parity ).

References
http://www.thegeekstuff.com/2010/08/raid-levels-tutorial/
http://www.macworld.com/article/1165692/lacie_2big_thunderbolt_series_6tb_raid_array.html

Costs
Expect to spend between $500-$1000.00 based on your storage capacity needs for master copy. 


DROBO
A proprietary external storage solution for computers, Drobo (formerly known as Data Robotics) allows for flexible growth of storage capacity. DROBO’s proprietary “BeyondRAID” technology allows for the volumes to expand without the need for rebuilding your RAID every time new drives are added. DROBO’s higher end model provides not only redundancy of drives, but also for power supplies and fans.

References
add
Comments
add costs?



RAID 5
RAID Level 5 is what is probably used most of the time. At least three hard disks are needed to build a RAID 5 storage array. Each block of data will be stored in three different places. Two of these places will store the block as it is, the third will store a checksum. Since this method is symmetric, one lost data block can be rebuilt from the other data block and the checksum. For each block, a different disk will hold the parity block which holds the checksum. This is done to increase redundancy. Any disk can fail. Overall, there will be one disk holding the checksums, so the total usable capacity will be that of all disks except for one. The size of the resulting logical disk will be the size of all disks together, except for one disk which holds parity information. A block-level checksum only proves that a block is self-consistent; it doesn't prove that it's the right block. Reprising our UPS analogy, "We guarantee that the package you received is not damaged. We do not guarantee that it's your package."
failed-raid-5-diagram.jpg

In this RAID 5 example it keeps an index of checksums for each block in a parity block. These checksums can allow for recovery from the redundant data block in a different location in case of disk failure. A typical block size is 512 bytes, so not the whole file. In this scenario, the checksum protects against data corruption in case of disk failure. But if the file was corrupted or altered elsewhere and then written to the Raid it would not be detected for example...


Scalable Network-Attached Storage (NAS)
Network-attached storage (NAS) is file-level computer data storage connected to a computer network providing data access to a heterogeneous group of clients. NAS not only operates as a file server, but is specialized for this task either by its hardware, software, or configuration of those elements. NAS is often manufactured as a computer appliance – a specialized computer built from the ground up for storing and serving files – rather than simply a general purpose computer being used for the role.[nb 1]

As of 2010 NAS devices are gaining popularity, as a convenient method of sharing files among multiple computers.[1] Potential benefits of network-attached storage, compared to file servers, include faster data access, easier administration, and simple configuration.[2]

NAS systems are networked appliances which contain one or more hard drives, often arranged into logical, redundant storage containers or RAID. Network-attached storage removes the responsibility of file serving from other servers on the network. They typically provide access to files using network file sharing protocols such as NFS, SMB/CIFS, or AFP.

Note that hard drives with "NAS" in their name are functionally similar to other drives but may have different firmware, vibration tolerance, or power dissipation to make them more suitable for use in RAID arrays, which are sometimes used in NAS implementations.[3] For example, some NAS versions of drives support a command extension to allow extended error recovery to be disabled. In a non-RAID application, it may be important for a disk drive to go to great lengths to successfully read a problematic storage block, even if it takes several seconds. In an appropriately configured RAID array, a single bad block on a single drive can be recovered completely via the redundancy encoded across the RAID set. If a drive spends several seconds executing extensive retries it might cause the RAID controller to flag the drive as "down" whereas if it simply replied promptly that the block of data had a checksum error, the RAID controller would use the redundant data on the other drives to correct the error and continue without any problem. Such a "NAS" SATA hard disk drive can be used as an internal PC hard drive, without any problems or adjustments needed, as it simply supports additional options and may possibly be built to a higher quality standard (particularly if accompanied by a higher quotes MTBF figures and higher price) than a regular consumer drive.

References
add
Comments
add
Costs


Off-site copy: Manual / RAID 
RAID manually copied and stored in a different location. Expect to spend $500-$1000.00/ £300.00-£600.00, to duplicate your master copy storage capacity need.


Off-site copy: Manual / Linear Tape Open (LTO) 
Linear Tape-Open (or LTO) is a magnetic tape data storage technology originally developed in the late 1990s as an open standards alternative to the proprietary magnetic tape formats that were available at the time. Hewlett-Packard, IBM and Seagate initiated the LTO Consortium, which directs development and manages licensing and certification of media and mechanism manufacturers. The standard form-factor of LTO technology goes by the name Ultrium, the original version of which was released in 2000 and could hold 100 GB of data in a cartridge. LTO version 6 released in 2012 can hold 2.5 TB in a cartridge of the same size. LTO is widely used with small and large computer systems, especially for backup. The benefits of LTO is that files can be written to the tape in their native format without compression. With the introduction of LTO3 in 2004 WORM was incorporated (write once read many) which means that tape drives will not erase or overwrite the data saved on a WORM cartridge but will read it. Recent LTO version incorporate LTFS (linear tape file system) which means that the tape can be mounted like other removable media such as external hard drives, and so will behave like a disk (drive) but it is still a tape with serial access. 

References
add
Comments
add
Costs


Off-site copy: Automatic / Paid Cloud Storage
Cloud storage is a model of networked enterprise storage where data is stored in virtualized pools of storage which are generally hosted by third parties. Hosting companies operate large data centers, and people who require their data to be hosted buy or lease storage capacity from them. The data center operators, in the background, virtualize the resources according to the requirements of the customer and expose them as storage pools, which the customers can themselves use to store files or data objects. Physically, the resource may span across multiple servers and multiple locations. The safety of the files depends upon the hosting companies, and on the applications that leverage the cloud storage. Cloud storage services may be accessed through a web service application programming interface (API) or by applications that utilize the API, such as cloud desktop storage, a cloud storage gateway or Web-based content management systems. Examples of cloud storage include Dropbox and Google Drive.

AWS 
References http://www.calctool.org/CALC/prof/computing/transfer_time (calculates data transfer time)
Comments
Costs (based on 2015 prices) There are many personal paid cloud options which can range from $4.00-$10.00/£3.00-£7.00 per month.


Off-site copy: Automatic / Peer-to-Peer File Sharing (P2P)

Peer-to-peer (P2P) is a method of distributing files between many computers, which has the benefit of allowing one to circumvent a third party, such as a commercial “cloud” storage service. Often P2P technology is used for the purpose of sharing files, providing the ability to download different bits of a file simultaneously from different peers, which offers a faster download speed than when downloading a file from one provider. P2P technology can also be used for the automatic synchronization of data. Through the use of special software, one can configure a network of computers in geographically distributed locations, to keep a set of data synchronized between them. Depending on the level of access and control one has over the nodes of this network, P2P technology can eliminate the need to manually manage copies for off-site redundancy. Some P2P file synchronization tools provide the ability to encrypt offsite copies, which could be desirable if nodes in your P2P network could potentially be accessed by untrusted parties.


References
http://www.onguardonline.gov/p2p
Costs (based on 2015 prices)
There are many personal paid cloud options which can range from $4.00-$10.00/£3.00-£7.00 per month.

## Level 3
Level 3 is designed for collections with a significant amount of digital material (500+) as well as budget and staff dedicated to the care and maintenance of this collection. Examples of Level 3 collections would be public or private collecting institutions such as large libraries, museums and archives (for example the Museum of Modern Art, Tate, the San Francisco Museum of Modern Art, and the New York Public Library). These institutions have staff from different departments (IT, Conservation/Preservation, Curatorial, Registration, etc.) involved in the design and workflow of this storage scenario and have a dedicated budget allocated to the regular maintenance and care of their material as well as the storage infrastructure. Level 3 recommends using a scalable enterprise storage solution for the on-site copy and a similar solution for the first off-site copy, with other using automatic copying to LTO or using paid storage.
Storage diagram level 3
Primary copy: on-site 
Scalable Enterprise Storage 
Disc
LTO
Solid state 

Off-site copy: Online  
Scalable Enterprise Storage
Disc
LTO
Solid state 

Off-site copy: Offline Automatic or Manual / Linear Tape Open (LTO) 
Blah Blah…...A desktop tape drive can be used if creating the tapes manually. If using to create tapes in an automated manner, this can be done either using a tape library

References

Costs

Single LTO tape drive c. ~$3000.00 (??) 

Autoloader (Multiple Tape) LTO tape drive c. ~$4500.00 (??) 



Off-site copy: Offline Automatic Paid Cloud Storage


Off-site copy: Automatic / Peer-to-Peer File Sharing (P2P)

Add text describing the Peer to Peer file sharing at enterprise level 

Peer-to-peer file sharing is the distribution and sharing of digital documents and computer files using the technology of peer-to-peer (P2P) networking. P2P file sharing allows users to access media files such as books, music, movies, and games using a specialized P2P software program that searches for other connected computers on a P2P network and locates the desired content.[1] The nodes (peers) of such networks are end-user computer systems that are interconnected via the Internet. Peer-to-peer file sharing technology has evolved through several design stages from the early networks like Napster, which popularized the technology, to the later models like the BitTorrent protocol. Several factors contributed to the widespread adoption and facilitation of peer-to-peer file sharing. These included increasing Internet bandwidth, the widespread digitization of physical media, and the increasing capabilities of residential personal computers. Users were able to transfer either one or more files from one computer to another across the Internet through various file transfer systems and other file-sharing networks.[1]


# Level 3: Museum examples
SFMOMA: storage infrastructure design 2015
SFMOMA High Level Network Storage Design

1_2_SFMOMA High Level Network-Storage Design.pdf

MOMA DRMC storage design

DRMC_storage_and_compute.pdf
Tate to provide network design diagram


each institution to provide explanation text that goes with the image?
Above is MoMA's storage design 2015


