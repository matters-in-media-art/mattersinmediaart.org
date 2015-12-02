---
layout: default
title: Collection Management and Storage
---

Whether you are an individual artist or large institution the first step in sustaining your digital video art is knowing what you have and where to locate it. 

An inventory could range from an excel spreadsheet, a database like Filemaker, an open source collection management software such as CollectiveAccess (http://www.collectiveaccess.org/about) or Omeka (http://omeka.org/about/) to the type of collection management system employed by museums, for example The Museum System (TMS), Mimsy, and ..... No matter which of these systems is used as you work through "Scoping Your Context" it is likely that the type of information you will need to scope your collection might already be found within this system, or that information you generate through this process you might consider adding to your inventory.  

Most museums and large institutions have comprehensive collection management databases for tracking their artworks, and digital storage for their data infrastructure. In museums databases are usually managed by the registration and collections management department, and data storage is usually in the realm of IT. In order to evaluate your current systems for the management of collection information for digital video, it may be necessary to talk to your registration and collections management staff as well as any IT staff supporting the systems. It is important to find out how current management systems are functioning, what they are technically capable of, what back-up systems are in already in place and how high your level of redundancy is. Having proper knowledge of these existing systems will help you tremendously to eventually modify them to fit the needs of your digital arts collection.


# Collection Management
In most cases the information about an art collection will be formed of a rich cluster of records that have been compiled and edited over time. In most cases only a fraction of this information is held within a central database. Most institutions will also have records management systems for these other associated documentation. 

The information held within a database, often called a Collection Management System, forms the core information needed for the following functions: 

inventory of all collection items
acquisition details, including artist and donor information
collection documentation
History of internal exhibitions
loans in and out    
tracking location of physical and digital parts of collections items 
The ability to track versions of digital files as they get transcoded or migrated
condition information
technical information about an artwork to inform its ongoing management
    
Depending on the institution and the size of your collection, a collection management system will look very different. For a small institution, collection management functionality could be carried out at a basic level using a database or spreadsheets, templates and standardised metadata. For a larger institution, a managed database will be necessary in order to:
provide a central information point with a consistent level of information about an entire collection regardless of medium or type
facilitate certain core workflows (for example an acquisition process or loans process)
provide auditing and reporting functions
allow for access to information and the ability to edit information to be defined at a user level  
allow for multiple users to update information and keep it current

In theory with a small collection this might be achieved with a simple database however the larger the number of users and objects and the more complex the workflows the more necessary a specialised database, ie. a collection management system, will become. 

It is uncommon to find one system that will facilitate both the collections management activities outlined above, and facilitate proper digital preservation. Therefore it is often the case that one may use different systems and tools for serving these two different core needs – for instance the use of a digital asset management system, or a digital repository in addition to a CMS. Before building or implementing any specialized systems beyond a CMS however,  one should consider how this specialized system will integrate and communicate with your collection management system.    

In a completely manual environment, you would be able to simply incorporate any additional information needed for the digital repository functions (for example checksum monitoring, format registry etc) and your core collection management information (for example location) into one database. Where specialist (often proprietary) databases exist, integration can be a challenging, expensive and skilled operation. 

[Link to Developing your systems > Collection Management]



# Storage Infrastructure
When scoping your current storage infrastructure it will be important to consider digital preservation needs, and understand the difference between standard storage set-ups and those suitable for digital preservation. Standard storage systems are designed for digital objects that are in active use and while back-up procedures are usually included, they generally do not meet the more stringent requirements to ensure long-term preservation of data. Preservation storage systems require a high level of redundancy, disaster recovery planning and active monitoring of data in order to detect unwanted changes such as corruption.


In assessing your current storage infrastructure, it may be useful to ask the following questions:
What type of storage infrastructure do you have? (e.g. external hard drives, Direct Attached Storage (DAS), Network Attached Storage (NAS), magnetic tape, etc. ) 
How many copies of any given digital object are maintained? Are these copies stored at different geographic locations?
How do you know when a digital object has become corrupt or has been altered either unintentionally or maliciously? 
What measures are in place to prevent a corrupted or altered file from being replicated? 
What security and auditing measures are in place to prevent unwanted access and/or modification of your data?
How are you tracking all of the files in multiple locations and on multiple mediums?(disk and tape)
Do you have a disaster recovery plan in place?

[Link to Developing Your Systems, storage section?]


#Digital Repository
A digital repository for your collection is about more than just storage. There are many functions that can be carried out by a digital repository system in order to monitor and ensure the ongoing integrity of your collection objects. Just as for Collection Management systems, the way these functions are implemented will depend on individual circumstances. For a small, homogenous collection, many of these functions could be carried out manually. For a larger and more varied collection, it will be necessary to have automated workflows and systems.


These functions include:
Automated and policy driven workflows for the ingest of digital objects, including the extraction of metadata and packaging of the object and metadata for storage
Generation of a persistent identifier for each digital object and a permanent relationship to associated metadata
Generation of normalised masters (a preservation copy of a file in a standardised format), according to policy
Generation of access derivatives and an interface for user access to these derivatives, alongside associated metadata
Auditing of system and user activities
Active monitoring of file integrity
Recording and reporting on collection characteristics, such as file formats
Monitoring of preservation risks, e.g. file obsolescence and software dependencies


[Link to Developing Your Systems > Digital Repositories?]


ADD WORK FLOWS??