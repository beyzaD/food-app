using System;
using System.Collections.Generic;
using FoodApp;
using Microsoft.Azure.EventGrid;
using Microsoft.Azure.EventGrid.Models;
using Microsoft.Extensions.Configuration;

namespace FoodApi
{
    public class EventGridPublisher
    {
        FoodConfig cfg;

        public EventGridPublisher(IConfiguration config)
        {
            cfg = config.Get<FoodConfig>();
        }

        public void PublishEvent(FoodItem item, FoodEventType type)
        {
            //TODO: Update Event to use CloudEventV10 schema
            EventGridEvent evt = new EventGridEvent()
            {
                Id = Guid.NewGuid().ToString(),
                EventType = $"FoodApp.{type.ToString()}",
                Data = new FoodEventData()
                {
                    id = item.ID,
                    type = FoodEventType.Create.ToString(),
                    quantity = 1
                },
                EventTime = DateTime.Now,
                Subject = "FoodEvent",
                DataVersion = "2.0"
            };
            List<EventGridEvent> evts = new List<EventGridEvent> (){evt};

            string topicHostname = new Uri(cfg.Azure.EventGridEP).Host;
            TopicCredentials topicCredentials = new TopicCredentials(cfg.Azure.EventGridKey);
            EventGridClient client = new EventGridClient(topicCredentials);
            client.PublishEventsAsync (topicHostname, evts).GetAwaiter ().GetResult ();
        }
    }
}