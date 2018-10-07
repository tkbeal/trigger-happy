# Trigger Happy

## Inspiration
Our team was inspired by the current news in the media involving deaths that could have been preventable with better technology. A large amount of police brutality news articles showed up, and we realized maybe we can't solve all the sentiment behind the police in the world, but maybe we can improve the statistics with a bit of machine learning.

## What it does
We've invented an augmented police handgun that scans an individual while out of holster, and prevents firing lethal bullets. We know that guns protect, but they can also kill. However, shots that occur on the arms and below the waist are less likely to cause death while still getting the job done in stopping or preventing an individual from continuing fire.


## How we built it
We used a webcam held on the front of the handgun to feed in footage to a machine learning algorithm that has been trained with a human pose recognition model. Then we calculate where the projectile will impact, and enable/disable the safety lock on the handgun appropriately. There is a visual screen to display whether the safety is on or off, as well as a mobile app accompaniment.

## Challenges we ran into
The original plan was to make the processing completely run on the handgun. We checked out every Dragonboard offered by MLH, and all of them had a hardware issue at some point limiting us from implementing our development package. So we resorted to an arduino and on computer computation.

We also ran into issues with AWS. We met with AWS mentors at the booth and they were also unsure why the tutorial provided by Amazon was not working. They ended up filing a help ticket for us. As a result, we downloaded and executed our selected ML model locally on a Node.js server. 

## Accomplishments that we're proud of
Our nerf gun looks realy cool. Our pose detection UI looks amazing. The arduino perfectly implements the visuals on the nerf gun.

## What we learned
We learned how to implement TenserFlow onto Dragonboards, AWS, and Node.js servers. We learned how to use arduino to power lcd displays. We learned about how to access a webcam as a peripheral. We learned Dragonboards are not worth the time that MLH wants us to put into them. 

## What's next for Trigger Happy
In the future, we would like for out handgun to be more compact and all onboard the handgun. We would furthermore attach our mobile app to registered gun users as a way to track the history and environment surrounding each fire of the weapon. The hope is that this can be used by law enforcement or individuals in legal matters as well as lower the number of shooting related deaths. 
Removing guns is an answer, but it's **_not a practical one_**. With technology, we can make them **_safer_**, without losing the effectiveness in their purpose.
