export const accordionData = [
    {
      heading: "Game Actions",
      content:
      <p>A. Attacking<br></br> B. Tribute Summoning PP 9 & 10 Creature<br></br> C. Summoning Effect Card<br></br> D. Summoning Counter Card (casted during opponent's turn)<br></br> E. Summoning Wild Card<br></br> F. Passing turn<br></br> G. Bluff (face-down summon)<br></br> H. Drawing from deck<br></br></p>,
    },
    {
      heading: "Game Details",
      content:
        <p>A. 15 card decks per game per player, 5 cards drawn per hand to start<br></br>
        B. Only 1 card per Creature/spell card is allowed (no duplicates/doubles)<br></br>
        C. Each player begins with 30 life points<br></br>
        D. Creature of lower PP do no damage to Creature of higher PP<br></br>
        E. Creature may be summoned in face-down or “bluff” mode. The Creature does not need to be revealed until it
        attacks, or is attacked by the opposing player’s Creature<br></br>
        F. Creatures of PP 9+ will require a tribute summon of a card of lesser PP that has been active on the field for<br></br>
        at least 1 turn.
        G. Players cannot have more than 1 card of each PP<br></br>
        H. Players can bluff summon 2 times per game<br></br></p>,
    },
    {
      heading: "First Main Phase",
      content:
        <p>A. Draw 1 card from deck<br></br>
        B. Player’s may summon 1 Creature per turn. A Creature cannot attack until it has been on the field for at least
        1 turn<br></br>
        C. Once you are done summoning, the next player’s turn begins and repeats this step<br></br></p>,
    },
    {
        heading: "Combat Phase",
        content:
          <p>Declare attackers step<br></br><br></br>A. Players decide which of the opponent’s Creature(s) their casted Creature will attack<br></br>
          B. Players can cast effect & wild cards during the attack phase<br></br>
          C. A Creature may attack only once per turn<br></br>
          D. If multiple Creatures are on the field, each creature may attack so long as it has been summoned for at least
          1 full turn<br></br><br></br><br></br>
          Combat Step<br></br><br></br>
          A. The attacking Creature(s) on the battlefield assigns its attack damage to the defending Creature(s)<br></br>
          B. If an attacking Creature’s damage exceeds that of the opposing Creature(s) it is attacking, the remaining
          damage is dealt to the opposing player’s life points<br></br>
          C. If an attacking Creature’s PP is not greater than the defending Creature’s power points, the attacking
          creature is sent to the graveyard<br></br>
          D. If an attacking Creature’s PP is equal to that of the opposing Creature, both Creatures are sent to the
          graveyard<br></br>
          E. Applicable counter cards may be used during the opposing player’s attack turn<br></br></p>,
      },
      {
        heading: "Graveyard",
        content:
          <p>A. Creatures killed during the attack phase are automatically moved to the discard pile and cannot be reused
          unless a resurrection effect card is activated<br></br>
          B. Revived Creatures return to the field, not the player’s hand<br></br>
          C. A revived Creature may not attack on the same turn it is revived<br></br></p>,
      },
      {
        heading: "How To Lose",
        content:
          "The first player who runs out of life points loses.",
      },
      {
        heading: "Duel Realms Cards",
        content:
          <p>→ 3 Wild Cards<br></br><br></br>
          ● &ensp;Angel’s Blessing: Revive any Creature from your graveyard<br></br>
          ● &ensp;Cosmic Black Hole: Wipe all cards on the field<br></br>
          ● &ensp;Gambler’s Trade: Burn 1 card from your hand to draw another from the top of your deck<br></br><br></br>

      → 5 Effect Cards<br></br><br></br>
      ● &ensp;Elixir of Vitality: Boost attacking Creature by 5pp for one turn<br></br>
      ● &ensp;Stroke of Luck: Draw 2 cards<br></br>
      ● &ensp;Upper Hand: Eliminate 1 card from your opponent's hand, send it to their graveyard<br></br>
      ● &ensp;Right of Passage: Special Summon any tribute Creature from your hand<br></br>
      ● &ensp;Fatal Curse: Decrease an opposing Creature on the field's PP by 5 prior to damage calculation.<br></br><br></br>

      → 5 Counter Cards<br></br><br></br>
      ● &ensp;Reverse Uno: When a Creature attacks your life points directly, negate the attack. The attacking
      Creature is sent to the graveyard.<br></br>
      ● &ensp;Forcefield: Negate any attack from your opponent’s Creature. That Creature can no longer attack that
      turn.<br></br>
      ● &ensp;U-Turn: Cancel any Creature summon attempted by your opponent. That card returns to your opponent’s
      hand.<br></br>
      ● &ensp;Prohibition: Cancel the use of any Effect, Counter, or Wild card played by your opponent. That
      card returns to your opponent’s hand.<br></br>
      ● &ensp;Sacrificial Lamb: Discard 1 card from your hand to take no damage to your life points for that turn.<br></br><br></br>

      → Creature Cards<br></br><br></br>
      ● &ensp;6 Strongest tier cards, need to be tribute summoned by sacrificing one Creature that is on the field and has
      survived at least one turn.<br></br><br></br>
      ➢ &ensp;3 Cards with highest power points possible, but have a “nerf” aka downside
      Creature is sent to the graveyard.<br></br>

      &ensp;1. Ice Dragon (10pp)<br></br>
      &emsp;★ Becomes eliminated from the field after 3 turns<br></br>
                  &ensp;2. Sinister Sorcerer (10pp)<br></br>
                  &emsp; ★ Lose 1 life point per turn when this card is on the field<br></br>
                  &ensp;3. Volcanic Dragon (10pp)<br></br>
                  &emsp; ★ Creature loses 1 pp per turn until it reaches 7 PP.<br></br><br></br>

      ➢ 3 Cards with second highest pp possible (9pp), no downside<br></br><br></br>
                  &emsp;★ Shadow Knight<br></br>
                  &emsp; ★ Skeletal Mammoth<br></br><br></br>
                  ● Regular summon Creature cards, no tribute necessary<br></br><br></br>
                  &emsp; ★ 8pp: Celestial Fairy, Mystic Tiger, Centaur<br></br>
                  &emsp;★ 7pp: Kraken, Mage, Other Knight, Mythical Phoenix<br></br>
                  &emsp;★ 6pp: Guardian Troll, Baby Dragon, Sword Soldier, Megladon, Unicorn<br></br>
                  &emsp;★ 5pp: Black Widow, Zombie, King Cobra, Dire Wolf, Sexy Sorceress, 2 Headed Hound<br></br>
                  &emsp;★ 4pp: Mutant Plant, Cyclops, Apprentice Wizard, Docile Witch, Enchanted Mermaid<br></br><br></br>
                  ● Weaker, regular summon Creature cards, no tribute necessary *Special Buffs*<br></br><br></br>
                  &emsp;★ 3pp: Silly Rabbit, Prehistoric Caveman, Vampire, Goblin<br></br>
                  &emsp;&emsp;■ These creatures can attack the turn they are summoned.<br></br><br></br>
                      ★ 2pp: Clown, Robot, Giant Scorpion<br></br>
                      &emsp;&emsp; ■ When attacked in a face down position, both the attacking Creature and  the face down
                      Creature are destroyed.<br></br>
                      ★ 1pp: Kevin<br></br>
                      &emsp;&emsp;■ When attacked in face down position, the opponent’s attacking  Creature is sent to the
                      graveyard and the attack is negated. The face down Creature is now face up<br></br></p>,
      },
      {
        heading: "Situational Rules",
        content:
          <p>A. Players draw 5 cards prior to the first main phase. Then, 1 card is drawn at the beginning of each turn.<br></br>
          B. A player may use multiple effects per turn.<br></br>
          C. Cards of level 9 or higher can be revived from the graveyard without a tribute.<br></br>
          D. Cards of level 9 or higher cannot be bluffed without a tribute.<br></br>
          E. Cards of level 9 or higher that have just been tribute summoned cannot attack on the turn they are
          summoned.<br></br>
          F. A tribute summon of a level 9 or higher card is considered a creature summon, which cannot be stacked
          with a regular summon in the same turn.<br></br>
          G. Effect cards must be played prior to combat phase.<br></br>
          H. Graveyard is reshuffled into deck once player runs out of cards to draw.<br></br>
          I. A player can have as many creatures on the field as they are able to summon.<br></br>
          J. Multiple creatures cannot stack attacks onto a single opposing creature.<br></br>
          K. A revived creature cannot attack on the same turn it returns to the field.<br></br>
          L. Effect, Counter, and Wild cards cannot be revived from Graveyard (excluding reshuffles).<br></br>
          M. A Prohibition counter card may be countered by a Prohibition.<br></br>
          N. A creature of PP 3 that is revived can attack in the same turn.<br></br></p>,
      },
  ];
  