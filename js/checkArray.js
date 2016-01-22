function checkArray() {
            var notifDiv = document.createElement("div");
            notifDiv.id = "note";
            
            var existingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9], toBePushed = [], duplicates = [], rangeStart, rangeEnd, matched;
            var text = document.getElementById("textInput").value;
            var numbers = text.split(',');

            for (i = 0; i < numbers.length; i++) {
                numbers[i] = numbers[i].trim();
                var index = numbers[i].search("-");
                matched = false;
                //console.log(numbers[i].substring(index + 1));
                if (index !== null && index !== -1 && numbers[i].substring(index+1) !== "" && numbers[i].charAt(index - 1) !== "") {
                    console.log("found");
                    rangeStart = Number(numbers[i].substr(0,index));
                    rangeEnd = Number(numbers[i].substring(index+1));

                    for (j = rangeStart; j <= rangeEnd; j++) {
                        matched = false;
                        for (k = 0; k < existingArray.length; k++) {
                            if(existingArray[k] === j)
                                matched = true;
                        }
                        if(matched)
                            duplicates.push(j);
                        else
                            toBePushed.push(j);
                    }                    
                    matched = false;
                }
                else {
                    for (k = 0; k < existingArray.length; k++) {
                        if(Number(existingArray[k]) === Number(numbers[i]))
                            matched = true;
                    }
                    if(matched)
                        duplicates.push(Number(numbers[i]));
                    else
                        toBePushed.push(Number(numbers[i]));
                }
            }
            $('notif').html('');
            if (duplicates.length>0){
                notifDiv.innerHTML = duplicates+' are duplicates and will be skipped and the final quantity of new additions is just '+toBePushed.length+' and '+toBePushed+' will be added';
                document.getElementById("notif").appendChild(notifDiv);
            }                    
            else {
                notifDiv.innerHTML = toBePushed+' will be added';
                document.getElementById("notif").appendChild(notifDiv);    
            }
               

        };